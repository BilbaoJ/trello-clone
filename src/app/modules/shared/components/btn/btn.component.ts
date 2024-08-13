import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COLORS, Colors } from '@shared/models/colors.model';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() disabled = false;
  @Input() loading = false;
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: Colors = 'primary';
  faSpinner = faSpinner;

  mapColors = COLORS;

  get colors(){
    const colors = this.mapColors[this.color];
    if (colors) {
      return colors
    }
    return {}
  }

}
