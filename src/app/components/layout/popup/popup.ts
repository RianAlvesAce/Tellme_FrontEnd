import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColaboradorCard } from "../../utils/colaborador-card/colaborador-card";
import { SeeWorkshops } from "../see-workshops/see-workshops";
import { Label } from "../../utils/label/label";
import { SeeMobileFilter } from "../see-mobile-filter/see-mobile-filter";

@Component({
  selector: 'app-popup',
  imports: [ColaboradorCard, SeeWorkshops, Label, SeeMobileFilter],
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
