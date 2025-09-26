import { Component, signal } from '@angular/core';
import { Header } from './components/layout/header/header';
import { Table } from "./components/layout/table/table";
import { Filter } from "./components/layout/filter/filter";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {faArrowPointer} from "@fortawesome/free-solid-svg-icons";
import { Popup } from "./components/layout/popup/popup";

@Component({
  selector: 'app-root',
  imports: [Header, Table, Filter, FontAwesomeModule, Popup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TellWorldFrontEnd');

  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowPointer);
  }

  isOpen: boolean = false;
  PopPupIsMobileFilter: boolean = false;

  closePopPup(){
    this.isOpen = false;
  }

  openPopPup(isMobileFilter: boolean){
    this.isOpen = true;
    this.PopPupIsMobileFilter = isMobileFilter;
  }
}