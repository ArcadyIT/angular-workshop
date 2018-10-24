import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate correct value', () => {
    component.value1 = '12';
    component.value1 = '4';

    component.onCalculate();

    expect(component.result).toBe(3);
  });

  it('should throw an exception', () => {
    component.value1 = '12';
    component.value1 = '4';

    component.onCalculate();

    expect(component.result).toBe(3);
  });
});
