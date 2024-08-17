import { Component } from '@angular/core';
import { BackgroundComponent } from '@auth/components/background/background.component';
import { FooterComponent } from '@auth/components/footer/footer.component';
import { HeaderComponent } from '@auth/components/header/header.component';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from '@auth/components/register-form/register-form.component';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,
            HeaderComponent,
            FooterComponent,
            BackgroundComponent,
            RegisterFormComponent
          ],
  templateUrl: './register.component.html'
})
export default class RegisterComponent {

}
