import { Component, EventEmitter, Output } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-workshop-bar',
  imports: [FontAwesomeModule],
  templateUrl: './workshop-bar.html',
  styleUrl: './workshop-bar.css'
})
export class WorkshopBar {
  constructor(library: FaIconLibrary){
    library.addIcons(faArrowPointer);
  }

  @Output() open = new EventEmitter<boolean>();

  openIt(){
    this.open.emit(false);
  }
}
