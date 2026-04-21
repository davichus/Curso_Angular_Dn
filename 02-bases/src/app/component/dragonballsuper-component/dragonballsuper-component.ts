import { DragonballService } from './../../services/dragonball-service';
import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../dragonball/character-list-component/character-list-component";
import { CharacterAddComponent } from '../dragonball/character-add-component/character-add-component';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonballsuper-component',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
],
  templateUrl: './dragonballsuper-component.html',
  styleUrl: './dragonballsuper-component.css',
})

export class DragonballsuperComponent {

  public dragonBallService = inject(DragonballService);
}
