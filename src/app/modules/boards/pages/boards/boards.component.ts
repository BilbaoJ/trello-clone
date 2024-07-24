import { Component } from '@angular/core';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faWaveSquare, faChevronDown, faChevronUp, faClock, faUser,
          faGear, faBriefcase, faInfo, faHeart} from '@fortawesome/free-solid-svg-icons';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, CdkAccordionModule, RouterLink],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

  faTrello = faTrello;
  faWaveSquare = faWaveSquare;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faClock = faClock;
  faUser = faUser;
  faGear = faGear;
  faBriefcase = faBriefcase;
  faInfo = faInfo;
  faHeart = faHeart;
}
