import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {

  private authService: AuthService = inject(AuthService);

  ngOnInit(){
    this.authService.getProfile()
    .subscribe();
  }
}
