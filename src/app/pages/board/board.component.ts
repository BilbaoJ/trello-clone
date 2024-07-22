import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToDo } from '../../models/todo.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faLock, faChartSimple, faChevronDown,
          faRocket, faBoltLightning, faFilter, faUserPlus,
            faEllipsis, faPlus} from '@fortawesome/free-solid-svg-icons';
import { Column } from '../../models/column.model';

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

  columns = signal<Column[]>([
    {
      title: 'ToDo',
      tasks: [
        {
          id: '1',
          title: 'Task 1'
        },
        {
          id: '2',
          title: 'Task 2'
        },
      ]
    },
    {
      title: 'Doing',
      tasks: [
        {
          id: '3',
          title: 'Task 3'
        }
      ]
    },
    {
      title: 'Done',
      tasks: [
        {
          id: '4',
          title: 'Task 4'
        }
      ]
    }
  ]);

  faStar = faStar;
  faLock = faLock;
  faChartSimple = faChartSimple;
  faChevronDown = faChevronDown;
  faRocket = faRocket;
  faBoltLightning = faBoltLightning;
  faFilter = faFilter;
  faUserPlus = faUserPlus;
  faEllipsis = faEllipsis;
  faPlus = faPlus;

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

  addColumn(){
    const newColumn = {
      title: 'Nueva lista',
      tasks: []
    };
    this.columns.update((columns) =>[...columns, newColumn]);
  }
}
