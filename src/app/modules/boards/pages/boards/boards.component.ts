import { Component, inject } from '@angular/core';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faWaveSquare, faChevronDown, faChevronUp, faClock, faUser,
          faGear, faBriefcase, faInfo, faHeart} from '@fortawesome/free-solid-svg-icons';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { RouterLink } from '@angular/router';
import { MeService } from '@services/me.service';
import { Board } from '@shared/models/board.model';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, CdkAccordionModule, RouterLink],
  templateUrl: './boards.component.html'
})
export default class BoardsComponent {

  private meService = inject(MeService);
  boards: Board[] = [];
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

  ngOnInit(){
    this.getMeBoards();
  }

  getMeBoards(){
    this.meService.getBoards()
    .subscribe(boards => {
      this.boards = boards;
    });
  }
}
