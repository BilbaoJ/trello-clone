import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackgroundComponent } from '@auth/components/background/background.component';
import { FooterComponent } from '@auth/components/footer/footer.component';
import { ForgotPasswordFormComponent } from '@auth/components/forgot-password-form/forgot-password-form.component';
import { HeaderComponent } from '@auth/components/header/header.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,
            HeaderComponent,
            FooterComponent,
            BackgroundComponent,
            ForgotPasswordFormComponent
          ],
  templateUrl: './forgot-password.component.html'
})
export default class ForgotPasswordComponent {

}
