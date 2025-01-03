import { Component, EventEmitter, inject, Output, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnComponent } from '@shared/components/btn/btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { BoardsService } from '@services/boards.service';
import { BACKGROUNDS, Colors } from '@shared/models/colors.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BtnComponent, FontAwesomeModule],
  templateUrl: './board-form.component.html',
})
export class BoardFormComponent {

  @Output() closeOverlay: EventEmitter<boolean> = new EventEmitter();

  private boardService = inject(BoardsService);
  private router = inject(Router);
  private background: WritableSignal<Colors> = signal('sky');
  colorBackgrounds = BACKGROUNDS;

  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),
    backgroundColor: new FormControl<Colors>('sky',{
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    })
  });

  faCheck = faCheck;

  doSave(){
    if (this.form.valid) {
      const { title, backgroundColor } = this.form.getRawValue();
      this.boardService.createBoard(title, backgroundColor)
      .subscribe(board => {
        this.closeOverlay.next(false);
        this.router.navigate(['app/boards/', board.id]);
      });
    }else{
      this.form.markAllAsTouched();
    }
  }

  changeColor(color: Colors){
    this.background.set(color);
  }

  get color(){
    const classes = this.colorBackgrounds[this.background()];
    return classes ? classes : {};
  }

}
