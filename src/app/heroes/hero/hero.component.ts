import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron man';
  public age: number  = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string  {
    return `${this.name} ${this.age}`
  }

  changeHero(): void {
     this.name = 'mario';
  }

  changeAge(): void {
     this.age = 3;
  }

  resetForm(): void {
     this.age = 45;
     this.name = 'iron man '
  }


}

