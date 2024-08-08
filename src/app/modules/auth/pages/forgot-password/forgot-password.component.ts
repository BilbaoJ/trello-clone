import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BackgroundComponent } from '@auth/components/background/background.component';
import { FooterComponent } from '@auth/components/footer/footer.component';
import { HeaderComponent } from '@auth/components/header/header.component';
import { AuthService } from '@services/auth.service';
import { BtnComponent } from '@shared/components/btn/btn.component';
import { RequestStatus } from '@shared/models/request-status.model';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,
            HeaderComponent,
            FooterComponent,
            BackgroundComponent,
            BtnComponent,
            RouterLink,
            ReactiveFormsModule
          ],
  templateUrl: './forgot-password.component.html'
})
export default class ForgotPasswordComponent {

  private authService = inject(AuthService);
  form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ]
    })
  });
  status = signal<RequestStatus>('init');
  emailSent = signal(false);

  sendLink(){
    if (this.form.valid) {
      this.status.set('loading');
      const {email} = this.form.getRawValue();
      this.authService.recovery(email).subscribe({
        next: () => {
          this.status.set('success');
          this.emailSent.set(true);
        },
        error: (error) => {
          this.status.set('failed');
        }
      });
    }else{
      this.form.markAllAsTouched();
    }
  }

}
