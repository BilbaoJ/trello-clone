import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { BackgroundComponent } from '@auth/components/background/background.component';
import { FooterComponent } from '@auth/components/footer/footer.component';
import { HeaderComponent } from '@auth/components/header/header.component';
import { BtnComponent } from '@shared/components/btn/btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { RequestStatus } from '@shared/models/request-status.model';
import { CommonModule } from '@angular/common';
import { CustomValidators } from '@utils/validators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,
            HeaderComponent,
            FooterComponent,
            BackgroundComponent,
            BtnComponent,
            RouterLink,
            FontAwesomeModule,
            ReactiveFormsModule
          ],
  templateUrl: './register.component.html'
})
export default class RegisterComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
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
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),
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
  statusUser = signal<RequestStatus>('init');
  message = signal('');

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = signal(false);
  showRegister = signal(false);

  constructor(){
    this.route.queryParamMap.subscribe(params => {
      const email = params.get('email');
      if (email) {
        this.showRegister.set(true)
        this.form.controls.email.setValue(email);
      }
    })
  }

  register(){
    if (this.form.valid) {
      this.status.set('loading');
      const {name, email, password} = this.form.getRawValue();
      this.authService.registerAndLogin(name, email, password).subscribe({
        next: () => {
          this.status.set('success');
          this.router.navigate(['/app/boards']);
        },
        error: (error) => {
          this.status.set('failed');
          if (error.error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            this.message.set('Este usuario ya existe. ¿Quieres iniciar sesión?')
          }
        }
      });
    }else{
      this.form.markAllAsTouched();
    }
  }

  validateUser(){
    if (this.formUser.valid) {
      this.statusUser.set('loading');
      const {email} = this.formUser.getRawValue();
      this.authService.isAvailable(email).subscribe({
        next: (rta) => {
          this.statusUser.set('success');
          if (rta.isAvailable) {
            this.form.controls.email.setValue(email);
            this.showRegister.set(true);
          }else{
            this.router.navigate(['/login'], {
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
