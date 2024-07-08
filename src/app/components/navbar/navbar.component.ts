import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnComponent } from "../btn/btn.component";
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    imports: [RouterLink, BtnComponent, OverlayModule, FontAwesomeModule]
})
export class NavbarComponent {

  isOpen : boolean = false;
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
}
