import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  imports: [],
  templateUrl: './label.html',
  styleUrl: './label.css'
})
export class Label {
  @Input() placeholder: string = "";
  @Input() type: string = "";
  @Input() title: string = "";
}
