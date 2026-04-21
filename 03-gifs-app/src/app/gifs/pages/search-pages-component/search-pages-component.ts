import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list-component/gif-list-component";
import { GifService } from '../../services/gif-service';
import { Gif } from '../../interfaces/gif-interface';

@Component({
  selector: 'app-search-pages-component',
  imports: [GifListComponent],
  templateUrl: './search-pages-component.html'
})
export default class SearchPagesComponent {

  private gifService = inject(GifService);
  public gifs = signal<Gif[]>([]);
  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp)=>{
      console.log(resp);
      this.gifs.set(resp);
    });
  }
 }
