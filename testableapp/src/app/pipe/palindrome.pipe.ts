import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'palindrome'
})
export class PalindromePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
