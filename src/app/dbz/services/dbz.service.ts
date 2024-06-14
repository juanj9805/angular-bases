import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

// console.log(uuid());


@Injectable({providedIn: 'root'})

export class DbzService {
  constructor() { }

  public characters: Character[] = [{
    id: uuid(),
    name: 'krilin',
    power: 1000
  },{
    id: uuid(),
    name:'goku',
    power:11000
  },{
    id: uuid(),
    name:'vegeta',
    power:12
  }];

  public addCharacter( {name, power}: Character ): void {

    const newCharacter: Character = {
      id: uuid(),
      name,
      power,
    }

    // ----------------------------------- FORMA OP DE HACER LO DE ARRIBA
    // public onNewCharacter( Character: Character ): void {
      // const newCharacter: Character = { id: uuid(), ...Character};
    // Con el operador rest( ...character) lo que hacemos es decir que tome el resto de atributos de ese elemento

    this.characters.push(newCharacter);
    console.log(newCharacter);

  }

  // public onDeleteCharacter(index: number) {
  //   this.characters.splice(index,1);
  // }

  public deleteCharacherById(id: string) {
    // this.characters.splice(id,1);
    this.characters = this.characters.filter ( character => character.id !== id);
  }

}
