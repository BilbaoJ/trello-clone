import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackgroundComponent } from '@auth/components/background/background.component';
import { FooterComponent } from '@auth/components/footer/footer.component';
import { HeaderComponent } from '@auth/components/header/header.component';
import { BtnComponent } from '@shared/components/btn/btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent,
            FooterComponent,
            BackgroundComponent,
            BtnComponent,
            RouterLink,
            FontAwesomeModule
          ],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = signal(false);

}
