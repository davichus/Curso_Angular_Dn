import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-component',
  imports: [ UpperCasePipe ],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css',
})
export class HeroComponent {

  public name = signal<string>('Ironman');
  public age = signal<number>(45);

  heroDescription = computed(()=> {
    const description = `${ this.name() } - ${ this.age() }`;
    return description;
  });

  capitalizeName = computed(() => {
    const nameCapitalized = this.name().toUpperCase();
    return nameCapitalized;
  });

  public getHeroDescription() {
    return `${ this.name()} - ${ this.age() }`;
  }

  public changeHero() {
    this.name.set('Spiderman');
    this.age.set(25);
  }

  public resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  public changeAge(){
    this.age.set(60);
  }


}
