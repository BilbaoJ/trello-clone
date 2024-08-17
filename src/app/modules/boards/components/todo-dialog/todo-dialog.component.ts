import { Component, inject, Inject } from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare,
          faClock, faEye, faPaperclip, faPager, faHardDrive, faPenRuler}
        from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '@shared/components/btn/btn.component';
import { Card } from '@shared/models/card.model';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CardsService } from '@services/cards.service';

interface InputData {
  card: Card,
  listTitle: string
}

interface OutputData {
  rta: boolean
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [CommonModule,
            FontAwesomeModule,
            BtnComponent,
            ReactiveFormsModule],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  private cardsService: CardsService = inject(CardsService);

  card: Card;
  listName: string;
  editingModeTitle: boolean = false;
  editingModeDescription: boolean = false;
  description = new FormControl('');

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  faEye = faEye;
  faPaperclip = faPaperclip;
  faPager = faPager;
  faHardDrive = faHardDrive;
  faPenRuler = faPenRuler;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ){
    this.card = data.card;
    this.listName = data.listTitle;
    this.description.setValue(this.card.description);
  }

  close(){
    this.dialogRef.close({
      rta: true,
    });
  }

  updateEditingMode(state: boolean){
    this.editingModeTitle = state;
  }

  updateEditingModeDescription(state: boolean){
    this.editingModeDescription = state;
  }

  updateTitle(event: Event){
    const input = event.target as HTMLInputElement;
    const newTitle = input.value.trim();
    if (newTitle !== '') {
      this.cardsService.update(this.card.id, { title: newTitle })
      .subscribe((cardUpdated) => {
        this.card.title = cardUpdated.title;
      });
      this.updateEditingMode(false);
    }
  }

  updateDescription(){
    let newDescription = this.description.value;
    if (newDescription === null) {
      newDescription = '';
    }
    this.cardsService.update(this.card.id, { description: newDescription })
    .subscribe((cardUpdated) => {
      this.card.description = cardUpdated.description;
    });
    this.updateEditingModeDescription(false);
  }

}
