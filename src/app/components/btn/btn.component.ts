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
  @Input() color: string = 'primary'

  get colors(){
    return {
      'bg-primary-600': this.color === 'primary',
      'hover:bg-primary-700': this.color === 'primary',
      'focus:bg-primary-950': this.color === 'primary',
      'bg-success-600': this.color === 'success',
      'hover:bg-success-700': this.color === 'success',
      'focus:bg-success-950': this.color === 'success',
      'bg-gray-200': this.color === 'gray-light',
      'hover:bg-gray-300': this.color === 'gray-light',
      'focus:bg-gray-400': this.color === 'gray-light',
    };
  }

}
