import { Component, EventEmitter, Output } from '@angular/core';
import { WorkshopBar } from '../../utils/workshop-bar/workshop-bar';

@Component({
  selector: 'app-table',
  imports: [WorkshopBar],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {

  @Output() table_open = new EventEmitter<boolean>();
  

  table_openIt(isMobileFilter: boolean){
    console.log("aqui")
    this.table_open.emit(isMobileFilter);
  }

}
