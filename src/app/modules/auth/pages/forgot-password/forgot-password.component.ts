import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackgroundComponent } from '@auth/components/background/background.component';
import { FooterComponent } from '@auth/components/footer/footer.component';
import { HeaderComponent } from '@auth/components/header/header.component';
import { BtnComponent } from '@shared/components/btn/btn.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [HeaderComponent,
            FooterComponent,
            BackgroundComponent,
            BtnComponent,
            RouterLink
          ],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

}
