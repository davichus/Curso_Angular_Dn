import { Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item-component/gif-list-item-component";
import { Gif } from '../../interfaces/gif-interface';

@Component({
  selector: 'gif-list-component',
  imports: [GifListItemComponent],
  templateUrl: './gif-list-component.html'
})
export class GifListComponent {
  gifs = input.required<Gif[]>();
 }
