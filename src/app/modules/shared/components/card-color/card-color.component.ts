import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { COLORS, Colors } from '@shared/models/colors.model';

@Component({
  selector: 'card-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-color.component.html'
})
export class CardColorComponent {

  @Input() color: Colors = 'sky';

  mapColors = COLORS;

  get colors(){
    const classes = this.mapColors[this.color];
    return classes ? classes : {};
  }
}
