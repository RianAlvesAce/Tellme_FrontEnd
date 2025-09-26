import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SeeWorkshops } from "../see-workshops/see-workshops";
import { SeeMobileFilter } from "../see-mobile-filter/see-mobile-filter";

@Component({
  selector: 'app-popup',
  imports: [SeeWorkshops, SeeMobileFilter],
  templateUrl: './popup.html',
  styleUrl: './popup.css'
})
export class Popup {

  @Input() type: string = "";

  @Output() close = new EventEmitter<void>();

  closeIt() {
    this.close.emit();
  }
}
