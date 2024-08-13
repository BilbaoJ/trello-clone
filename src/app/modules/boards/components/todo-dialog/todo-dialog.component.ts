import { Component, Inject } from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare,
          faClock, faEye, faPaperclip, faPager, faHardDrive, faPenRuler} from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '@shared/components/btn/btn.component';
import { ToDo } from '@shared/models/todo.model';
import { Card } from '@shared/models/card.model';

interface InputData {
  card: Card
}

interface OutputData {
  rta: boolean
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [ FontAwesomeModule, BtnComponent ],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  card: Card;

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
  }

  close(){
    this.dialogRef.close({
      rta: true,
    });
  }

}
