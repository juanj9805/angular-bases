import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'trunks',
    power: 10,
  }]

  @Output()
  public  onDelete: EventEmitter<string> = new EventEmitter();
  // onDelete(id: number): void {

  // }

  @Output()
  deleteCharacherById(id?: string): void {
    //TODO: Emitir id de personaje
// Si no viene un id return pare la ejecucion y no borramos nada
    if( !id) return;

    console.log(id);


    console.log({id});
    this.onDelete.emit(id)
  }
}
