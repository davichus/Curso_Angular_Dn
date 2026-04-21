import type{ Character } from './../../../interfaces/character-interface';
import { Component, input } from '@angular/core';

@Component({
  selector: 'dragonball-character-list-component',
  templateUrl: './character-list-component.html'
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();
 }
