import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'success' | 'primary' | 'grayLight' = 'primary';

  mapColors = {
    success: {
      'bg-success-600': true,
      'hover:bg-success-700': true,
      'focus:bg-success-950': true,
      'text-white': true
    },
    primary: {
      'bg-primary-600': true,
      'hover:bg-primary-700': true,
      'focus:bg-primary-950': true,
      'text-white': true
    },
    grayLight: {
      'bg-gray-200': true,
      'hover:bg-gray-300': true,
      'focus:bg-gray-400': true,
      'text-gray-700': true
    }
  }

  get colors(){
    const colors = this.mapColors[this.color];
    if (colors) {
      return colors
    }
    return {}
  }

}
