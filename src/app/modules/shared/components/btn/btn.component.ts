import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COLORS, Colors } from '@shared/models/colors.model';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: Colors = 'primary';

  mapColors = COLORS;

  get colors(){
    const colors = this.mapColors[this.color];
    if (colors) {
      return colors
    }
    return {}
  }

}
