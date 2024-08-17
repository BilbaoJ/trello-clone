import { Component } from '@angular/core';
import { BackgroundComponent } from '@auth/components/background/background.component';
import { FooterComponent } from '@auth/components/footer/footer.component';
import { HeaderComponent } from '@auth/components/header/header.component';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '@auth/components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
            BackgroundComponent,
            FooterComponent,
            HeaderComponent,
            LoginFormComponent
          ],
  templateUrl: './login.component.html'
})
export default class LoginComponent {

}
