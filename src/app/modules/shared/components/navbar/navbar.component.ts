import { Component, computed, inject, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { BtnComponent } from "@shared/components/btn/btn.component";
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronRight, faArrowUpRightFromSquare,
          faBell, faCircleQuestion, faClose } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';
import { BoardFormComponent } from '../board-form/board-form.component';
import { BTN_NAV_COLORS, Colors, NAVBAR_COLORS } from '@shared/models/colors.model';
import { backGroundColor, logoColor } from '@shared/state/navbar';

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

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  logoColor: Signal<Colors> = computed(() => logoColor());
  bgColor: Signal<Colors> = computed(() => backGroundColor());
  colors = NAVBAR_COLORS;
  btnColors = BTN_NAV_COLORS;
  isOpenOverlayAvatarMenu : boolean = false;
  isOpenOverlayCreateBoard : boolean = false;
  user = this.authService.user$;

  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faBell = faBell;
  faCircleQuestion = faCircleQuestion;
  faClose = faClose;

  get bgColors(){
    const classes = this.colors[this.bgColor()];
    return classes ? classes : {};
  }

  get hover(){
    const classes = this.btnColors[this.bgColor()];
    return classes ? classes : {};
  }

  get logo(){
    return `/assets/logo/images/logo-gradient-${this.logoColor()}-trello.png`
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  close(event: boolean){
    this.isOpenOverlayCreateBoard = event;
  }

}
