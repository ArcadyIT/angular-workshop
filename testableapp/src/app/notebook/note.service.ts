import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  save(value: string) {
    console.log('Note saved!', value);
  }
}
