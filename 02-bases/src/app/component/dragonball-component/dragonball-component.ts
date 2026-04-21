import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-component',
  imports: [
    //NgClass
  ],
  templateUrl: './dragonball-component.html',
  styleUrl: './dragonball-component.css',
})

export class DragonballComponent {

  public name = signal<string>('');
  public power = signal<number>(0);

  public characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
  ]);

  addCharacter() {
    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    this.characters.update((list)=> [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
