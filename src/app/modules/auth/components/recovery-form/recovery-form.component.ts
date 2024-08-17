import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';
import { BtnComponent } from '@shared/components/btn/btn.component';
import { RequestStatus } from '@shared/models/request-status.model';
import { CustomValidators } from '@utils/validators';

@Component({
  selector: 'app-recovery-form',
  standalone: true,
  imports: [BtnComponent,
            RouterLink,
            FontAwesomeModule,
            ReactiveFormsModule],
  templateUrl: './recovery-form.component.html'
})
export class RecoveryFormComponent {

  private authService: AuthService = inject(AuthService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  status: WritableSignal<RequestStatus> = signal('init');
  token: WritableSignal<string> = signal('');
  showPassword: WritableSignal<boolean>= signal(false);

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

  faEye = faEye;
  faEyeSlash = faEyeSlash;

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
