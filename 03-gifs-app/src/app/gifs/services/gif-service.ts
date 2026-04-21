import { Gif } from './../interfaces/gif-interface';
import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif-mapper';
import { map, tap} from 'rxjs';

const GIF_KEY = 'gifs';
const loadfromLocalStorage = () =>{
  const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs;
}

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs =signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);

  searchHystory = signal<Record<string, Gif[]>>(loadfromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHystory()));

  constructor() {
    this.loadTrendingGifs();
   }

   saveGifsToLocalStorage = effect( () => {
    const historyString = JSON.stringify(this.searchHystory());
    localStorage.setItem(GIF_KEY, historyString);
   });

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: '20'
      }
    }).subscribe((resp)=>{
      const gifs = GifMapper.mapGiphyItemsToGifsArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log(gifs);
    });
  }

  searchGifs(query: string) {
    return this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        q: query,
        limit: '20'
      }
    }).pipe(
      map(({data}) => data),
      map((items)=> GifMapper.mapGiphyItemsToGifsArray(items)),
      //historial
      tap( (items) => {
        this.searchHystory.update((history) => ({
          ...history,
          [query.toLocaleLowerCase()]: items
        }));
      })
    );
    // .subscribe((resp)=>{
    //   const gifs = GifMapper.mapGiphyItemsToGifsArray(resp.data);
    //   this.trendingGifs.set(gifs);
    //   console.log(gifs);
    // });
  }

  getHistoryGifs( query: string ): Gif[] {
    return this.searchHystory()[query] ?? [];
  }

}
