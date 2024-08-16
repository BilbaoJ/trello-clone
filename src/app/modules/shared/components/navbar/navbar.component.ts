import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { BtnComponent } from "@shared/components/btn/btn.component";
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronRight, faArrowUpRightFromSquare, faBell, faCircleQuestion, faClose } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';
import { BoardFormComponent } from '../board-form/board-form.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    imports: [CommonModule,
              RouterLink,
              BtnComponent,
              OverlayModule,
              FontAwesomeModule,
              BoardFormComponent
            ]
})
export class NavbarComponent {

  @Input() textColor: string = 'gray';
  @Input() bgColor: string = 'white';
  @Input() logoColor: string = 'neutral';

  private authService = inject(AuthService);
  private router = inject(Router);

  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faBell = faBell;
  faCircleQuestion = faCircleQuestion;
  faClose = faClose;

  isOpenOverlayAvatarMenu : boolean = false;
  isOpenOverlayCreateBoard : boolean = false;
  user = this.authService.user$;

  get colorText(){
    return {
      'text-gray-600': this.textColor === 'gray',
      'text-white': this.textColor === 'white',
    };
  }

  get bgColors(){
    return {
      'bg-white': this.bgColor === 'white',
      'bg-primary-800': this.bgColor === 'blue',
      'border-b-2 border-gray-200': this.bgColor === "white"
    };
  }

  get hover(){
    return {
      'hover:bg-gray-300': this.bgColor === 'white',
      'hover:bg-primary-500': this.bgColor === 'blue',
    }
  }

  get logo(){
    return `/assets/logo/images/logo-gradient-${this.logoColor}-trello.png`
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  close(event: boolean){
    this.isOpenOverlayCreateBoard = event;
  }

}
