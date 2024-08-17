import { Component, inject } from '@angular/core';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faWaveSquare, faChevronDown, faChevronUp, faClock, faUser,
          faGear, faBriefcase, faInfo, faHeart,
          faClose} from '@fortawesome/free-solid-svg-icons';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { RouterLink } from '@angular/router';
import { MeService } from '@services/me.service';
import { Board } from '@shared/models/board.model';
import { CardColorComponent } from '@shared/components/card-color/card-color.component';
import { BoardFormComponent } from '@shared/components/board-form/board-form.component';
import { BtnComponent } from '@shared/components/btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent,
            FontAwesomeModule,
            CdkAccordionModule,
            RouterLink,
            CardColorComponent,
            BoardFormComponent,
            BtnComponent,
            OverlayModule],
  templateUrl: './boards.component.html'
})
export default class BoardsComponent {

  private meService: MeService = inject(MeService);
  boards: Board[] = [];
  isOpenOverlayCreateBoard : boolean = false;

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
  faClose = faClose;

  ngOnInit(){
    this.getMeBoards();
  }

  getMeBoards(){
    this.meService.getBoards()
    .subscribe(boards => {
      this.boards = boards;
    });
  }

  close(event: boolean){
    this.isOpenOverlayCreateBoard = event;
  }
}
