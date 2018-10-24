import { Component } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-notebook',
  template: `
    <h3>Latest message: <i>{{latestMessage}}</i></h3>
    <input #input type="text" placeholder="Write down your thoughts...">
    <button (click)="saveMessage(input.value)">Save</button>
  `
})
export class NotebookComponent {

  latestMessage: string;

  constructor(private noteService: NoteService) { }

  saveMessage(value: string) {
    if (value == null || value === '') {
      return;
    }

    this.latestMessage = value;
    this.noteService.save(this.latestMessage);
  }
}
