import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToDo } from '../../models/todo.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faLock, faChartSimple, faChevronDown,
          faRocket, faBoltLightning, faFilter, faUserPlus,
            faEllipsis} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, NavbarComponent, DragDropModule, FontAwesomeModule],
  templateUrl: './board.component.html',
  styles: [
  `
    /* Animate items as they're being sorted. */
  .cdk-drop-list-dragging .cdk-drag {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }

  /* Animate an item that has been dropped. */
  .cdk-drag-animating {
    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
  }
  `
  ]
})
export class BoardComponent {

  tasks: ToDo[] = [
    {
      id: '1',
      title: 'Task 1'
    },
    {
      id: '2',
      title: 'Task 2'
    },
  ];
  doing: ToDo[] = [
    {
      id: '3',
      title: 'Task 3'
    }
  ];
  done: ToDo[] = [
    {
      id: '4',
      title: 'Task 4'
    }
  ];

  faStar = faStar;
  faLock = faLock;
  faChartSimple = faChartSimple;
  faChevronDown = faChevronDown;
  faRocket = faRocket;
  faBoltLightning = faBoltLightning;
  faFilter = faFilter;
  faUserPlus = faUserPlus;
  faEllipsis = faEllipsis;

  drop(event: CdkDragDrop<ToDo[]>){
    if (event.previousContainer  === event.container) {
      moveItemInArray(event.container.data,
                      event.previousIndex,
                      event.currentIndex
                    );
    }else{
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex
                      );
    }
  }
}
