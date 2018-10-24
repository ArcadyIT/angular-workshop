import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  value1: string;
  value2: string;
  result: number;

  constructor() { }

  ngOnInit() {
  }

  onCalculate() {
    if (+this.value2 === 0) {
      throw new Error('Cannot divide by zero');
    }

    this.result = +this.value1 / +this.value2;
  }

}
