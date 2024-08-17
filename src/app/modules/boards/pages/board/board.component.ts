import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faLock, faChartSimple, faChevronDown,
          faRocket, faBoltLightning, faFilter, faUserPlus,
            faEllipsis, faPlus, faClose} from '@fortawesome/free-solid-svg-icons';
import {DialogModule, Dialog} from '@angular/cdk/dialog';
import { TodoDialogComponent } from '@boards/components/todo-dialog/todo-dialog.component'
import { ActivatedRoute } from '@angular/router';
import { BoardsService } from '@services/boards.service';
import { Board } from '@shared/models/board.model';
import { Card } from '@shared/models/card.model';
import { List } from '@shared/models/list.model';
import { CardsService } from '@services/cards.service';
import { BtnComponent } from '@shared/components/btn/btn.component';
import { ListsService } from '@services/lists.service';
import { BACKGROUNDS, BACKGROUNDS_HEAD } from '@shared/models/colors.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule,
            NavbarComponent,
            DragDropModule,
            FontAwesomeModule,
            DialogModule,
            BtnComponent,
            ReactiveFormsModule
          ],
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
export default class BoardComponent {

  private route: ActivatedRoute = inject(ActivatedRoute);
  private boarsdService: BoardsService = inject(BoardsService);
  private cardsService: CardsService = inject(CardsService);
  private listsService: ListsService = inject(ListsService);

  board: Board | null = null;
  showCardForm: boolean = false;
  showListForm: boolean = false;
  colorBackgrounds = BACKGROUNDS;
  colorHeads = BACKGROUNDS_HEAD;

  titleInput = new FormControl<string>('', {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });
  listInput = new FormControl<string>('', {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });

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
  faClose = faClose

  constructor(private dialog:Dialog){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getBoard(id);
      }
    })
  }

  ngOnDestroy(): void{
    this.boarsdService.setBackGroundColor('white');
    this.boarsdService.setLogoColor('neutral');
  }

  drop(event: CdkDragDrop<Card[]>){
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
    const position = this.boarsdService.getPosition(event.container.data, event.currentIndex);
    const card = event.container.data[event.currentIndex];
    const listId = event.container.id;
    this.updateCard(card, position, listId);
  }

  dropColumn(event: CdkDragDrop<List[]>){
    if (this.board) {
      moveItemInArray(this.board.lists, event.previousIndex, event.currentIndex);
    }
  }

  addList(){
    const title = this.listInput.value;
    if (this.board) {
      this.listsService.create({
        title,
        boardId: this.board.id,
        position: this.boarsdService.getPositionNewItem(this.board.lists)
      })
      .subscribe(list => {
        this.board?.lists.push({
          ...list,
          cards: [],
        });
        this.showListForm = false;
        this.listInput.setValue('');
      });
    }
  }

  openDialog(card: Card, listTitle: List['title']){
    const dialogRef = this.dialog.open(TodoDialogComponent,{
      minWidth: '50%',
      maxWidth: '50%',
      autoFocus: false,
      data: {
        card,
        listTitle
      }
    });

    dialogRef.closed.subscribe(output => {
      console.log(output);

    })
  }

  private getBoard(id: string){
    this.boarsdService.getBoard(id)
    .subscribe(board => {
      this.board = board;
      this.boarsdService.setBackGroundColor(board.backgroundColor);
      this.boarsdService.setLogoColor('white');
    });
  }

  private updateCard(card: Card, position: number, listId: string | number){
    this.cardsService.update(card.id, { position, listId })
    .subscribe((cardUpdated) => {})
  }

  openFormCard(list: List){
    list.showCardForm = !list.showCardForm;
    if (this.board?.lists) {
      this.board.lists = this.board.lists.map(iteratorList => {
        return{
          ...iteratorList,
          showCardForm: iteratorList.id === list.id
        }
      });
    }
  }

  createCardForm(list: List){
    const title = this.titleInput.value;
    if (this.board) {
      this.cardsService.createCard({
        title,
        listId: list.id,
        boardId: this.board.id,
        position: this.boarsdService.getPositionNewItem(list.cards)
      }).subscribe(card => {
        list.cards.push(card);
        this.titleInput.setValue('');
        list.showCardForm = false;
      });
    }
  }

  closeCardForm(list: List){
    list.showCardForm = false;
  }

  get colors() {
    if (this.board) {
      const classes = this.colorBackgrounds[this.board.backgroundColor];
      return classes ? classes : {};
    }
    return {}
  }

  get colorsHead() {
    if (this.board) {
      const classes = this.colorHeads[this.board.backgroundColor];
      return classes ? classes : {};
    }
    return {}
  }
}
