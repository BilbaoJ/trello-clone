import { CommonModule } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { BtnComponent } from '@shared/components/btn/btn.component';
import { RequestStatus } from '@shared/models/request-status.model';

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [CommonModule,
            BtnComponent,
            RouterLink,
            ReactiveFormsModule],
  templateUrl: './forgot-password-form.component.html'
})
export class ForgotPasswordFormComponent {
  private authService: AuthService = inject(AuthService);
  form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ]
    })
  });
  status: WritableSignal<RequestStatus> = signal('init');
  emailSent: WritableSignal<boolean> = signal(false);

  sendLink(){
    if (this.form.valid) {
      this.status.set('loading');
      const {email} = this.form.getRawValue();
      this.authService.recovery(email).subscribe({
        next: () => {
          this.status.set('success');
          this.emailSent.set(true);
        },
        error: () => {
          this.status.set('failed');
        }
      });
    }else{
      this.form.markAllAsTouched();
    }
  }
}
