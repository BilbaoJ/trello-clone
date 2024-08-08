import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BackgroundComponent } from '@auth/components/background/background.component';
import { FooterComponent } from '@auth/components/footer/footer.component';
import { HeaderComponent } from '@auth/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from '@shared/components/btn/btn.component';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '@utils/validators';
import { RequestStatus } from '@shared/models/request-status.model';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [HeaderComponent,
            FooterComponent,
            BackgroundComponent,
            BtnComponent,
            RouterLink,
            FontAwesomeModule,
            ReactiveFormsModule
          ],
  templateUrl: './recovery.component.html'
})
export default class RecoveryComponent {

  private authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  form = new FormGroup({
    newPassword: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(8)
      ]
    }),
    confirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required
      ]
    })
  },
  {
    validators: [ CustomValidators.MatchValidator('password', 'confirmPassword') ]
  });
  status = signal<RequestStatus>('init');
  token = signal('');
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = signal(false);

  constructor(){
    this.route.queryParamMap.subscribe(params => {
      const token = params.get('token');
      if (token) {
        this.token.set(token);
      }else{
        this.router.navigate(['login']);
      }
    })
  }

  recovery(){
    if (this.form.valid) {
      const { newPassword } = this.form.getRawValue();
      this.status.set('loading');
      this.authService.changePassword(this.token(), newPassword)
      .subscribe({
        next: () => {
          this.status.set('success');
          this.router.navigate(['login']);
        },
        error: () => {
          this.status.set('failed');
        }
      })
    }else{
      this.form.markAllAsTouched();
    }
  }
}
