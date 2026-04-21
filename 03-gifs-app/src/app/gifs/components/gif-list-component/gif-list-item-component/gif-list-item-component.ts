import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item-component',
  imports: [],
  templateUrl: './gif-list-item-component.html',
})
export class GifListItemComponent {
 public imageUrl = input<string>();
}