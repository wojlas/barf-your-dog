import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IDogWeight } from '../interfaces/IDogWeight';

@Component({
  selector: 'app-dog-info',
  templateUrl: './dog-info.component.html',
  styleUrls: ['./dog-info.component.css']
})
export class DogInfoComponent implements OnInit {
  @ViewChild('weightInput') weightInput!: ElementRef;
  @ViewChild('dailyInput') dailyInput!: ElementRef;
  @ViewChild('targetInput') targetInput!: ElementRef;
  @ViewChild('dryMeal') dryMealInput!: ElementRef;
  @ViewChild('mealNr') nrOfMealsInput!: ElementRef;

  @Input() set dogInfo(val: IDogWeight) {
    if (val) {
      this.dogInformation = val;
      this.dailyMeal = (val.Target * (val.DailyMeal / 100)) * 1000;
      this.dryMeal = this.dailyMeal - (this.dailyMeal * 0.7);
      this.nrOfMeals = +val.NumberOfMeals;
      this.singleMeal = this.dailyMeal / this.nrOfMeals;
      this.targetWeight = val.Target;
      this.targetWeightPerc = val.DailyMeal;
    }
  };

  @Output() weightOutput = new EventEmitter<{ inputName: string, value: number }>();  
  @Output() dailyOutput = new EventEmitter<{ inputName: string, value: number }>();
  @Output() targetOutput = new EventEmitter<{ inputName: string, value: number }>();



  public isVisible = true;
  public dogInformation!: IDogWeight;
  public dailyMeal: number = 0;
  public targetWeightPerc: number = 0;
  public targetWeight: number = 0;
  public dryMeal: number = 0;
  public nrOfMeals: number = 0;
  public singleMeal: number = 0;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public inputToggle(element: string): void {
    
    if (element === 'weight') {
      this.weightOutput.emit({ inputName: 'weight', value: +this.weightInput.nativeElement.value });

    } else if (element === 'daily') {
      this.dailyOutput.emit({ inputName: 'daily', value: +this.dailyInput.nativeElement.value });
      this.targetWeightPerc = this.dailyInput.nativeElement.value;
      this.dailyMeal = +this.toDecimal(((this.targetWeight * this.dailyInput.nativeElement.value)/100) * 1000, 2);
      this.dryMeal = +this.toDecimal(this.dailyMeal - (this.dailyMeal * 0.7), 2);
      

    } else if (element === 'target') {
      this.targetOutput.emit({ inputName: 'target', value: +this.targetInput.nativeElement.value });
      this.targetWeight = this.targetInput.nativeElement.value;
      this.dailyMeal = +this.toDecimal(((this.targetWeightPerc * this.targetInput.nativeElement.value)/100) * 1000, 2);
      this.dryMeal = +this.toDecimal(this.dailyMeal - (this.dailyMeal * 0.7), 2);
    
    } else if (element === 'meal-nr') {
      this.nrOfMeals = +this.nrOfMealsInput.nativeElement.value;
      this.singleMeal = +this.toDecimal(this.dailyMeal / this.nrOfMealsInput.nativeElement.value, 2);
    }
  }

  public toDecimal(figure: number, decimals = 0){
    let d = Math.pow(10,decimals);
    return (figure * d/d).toFixed(decimals);
  };

}
