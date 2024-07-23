import { Component } from '@angular/core';
import {DialogRef} from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare,
          faClock, faEye, faPaperclip, faPager, faHardDrive, faPenRuler} from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [ FontAwesomeModule, BtnComponent ],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

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

  constructor(private dialogRef: DialogRef){

  }

  close(){
    this.dialogRef.close();
  }

}
