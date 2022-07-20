import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meat-percent',
  templateUrl: './meat-percent.component.html',
  styleUrls: ['./meat-percent.component.css']
})
export class MeatPercentComponent implements OnInit {

  @Input() set mealWeight(val: number) {
    if (val) {
      this._mealWeight = val;
      this.meatWeight = val * 0.55;
      this.offalWeight = val * 0.15;
      this.liverWeight = val * 0.05;
      this.vegeWeight = val * 0.15;
      this.fruitWeight = val * 0.1;
      
      
    }
  };

  public isVisible = false;
  public meatWeight: number = 0;
  public offalWeight: number = 0;
  public liverWeight: number = 0;
  public vegeWeight: number = 0;
  public fruitWeight: number = 0;

  private _mealWeight: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  get mealWeight(): number {
    return this._mealWeight;
  }

}
