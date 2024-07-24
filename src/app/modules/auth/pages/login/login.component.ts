import { Component } from '@angular/core';
import { BackgroundComponent } from '@auth/components/background/background.component';
import { FooterComponent } from '@auth/components/footer/footer.component';
import { HeaderComponent } from '@auth/components/header/header.component';
import { BtnComponent } from '@shared/components/btn/btn.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BtnComponent, BackgroundComponent, FooterComponent, HeaderComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
