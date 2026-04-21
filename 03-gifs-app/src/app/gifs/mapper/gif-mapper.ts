import { Gif } from "../interfaces/gif-interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";


export class GifMapper {
    static mapGiphyItemToGif(item: GiphyItem): Gif {
        return {
            id: item.id,
            title: item.title,
            url: item.images.original.url
        }
    }

    static mapGiphyItemsToGifsArray(itmes: GiphyItem[]): Gif[] {
        return itmes.map(this.mapGiphyItemToGif);
    }
}