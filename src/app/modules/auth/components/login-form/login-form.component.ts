import { CommonModule } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash, faPen } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';
import { BtnComponent } from '@shared/components/btn/btn.component';
import { RequestStatus } from '@shared/models/request-status.model';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule,
            BtnComponent,
            RouterLink,
            FontAwesomeModule,
            ReactiveFormsModule],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  formUser = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ]
    })
  });
  form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(6)
      ]
    })
  });
  status: WritableSignal<RequestStatus> = signal('init');
  statusUser: WritableSignal<RequestStatus> = signal('init');
  showPassword = signal(false);
  showLogin = signal(false);

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faPen = faPen;

  constructor(){
    this.route.queryParamMap.subscribe(params => {
      const email = params.get('email');
      if (email) {
        this.form.controls.email.setValue(email);
      }
    })
  }

  doLogin() {
    if (this.form.valid) {
      this.status.set('loading');
      const { email, password } = this.form.getRawValue();
      this.authService.login(email, password).subscribe({
        next: () => {
          this.status.set('success');
          this.router.navigate(['/app/boards']);
        },
        error: () => {
          this.status.set('failed');
        }
      })
    } else{
      this.form.markAllAsTouched();
    }
  }

  validateUser(){
    if (this.formUser.valid) {
      this.statusUser.set('loading');
      const { email } = this.formUser.getRawValue();
      this.authService.isAvailable(email).subscribe({
        next: (rta) => {
          this.statusUser.set('success');
          if (!rta.isAvailable) {
            this.form.controls.email.setValue(email);
            this.showLogin.set(true);
          }else{
            this.router.navigate(['/register'], {
              queryParams: { email }
            });
          }
        },
        error: () => {
        }
      });
    }else{
      this.formUser.markAllAsTouched();
    }
  }

}
