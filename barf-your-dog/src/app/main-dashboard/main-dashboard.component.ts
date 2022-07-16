import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SetWeightComponent } from '../global/set-weight/set-weight.component';
import { DogWeightService } from '../services/dog-weight.service';
import { IDogWeight } from './interfaces/IDogWeight';
import { IMeatType } from './interfaces/IMeatType';
import { ISuplie } from './interfaces/ISuplie';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  public selectedFood!: IMeatType;
  public selectedSuplies: any[] = [];
  public toggleComponentMeat: boolean = false;
  public toggleComponentSuplies: boolean = false;

  public lastDogWeight?: any;
  public supliesMixResut: any = {};
  public dailyMeal!: number;
  public dryMeal!: number;

  private _dataForCalculate: any = {};

  constructor(
    private dogWeightService: DogWeightService,
    private modal: MatDialog,
    ) { }

  ngOnInit(): void {
    this.dogWeightService.getLastWeight(1).subscribe((res) => {
      this.lastDogWeight = res;
      this._dataForCalculate['daily'] = res.DailyMeal;
      this._dataForCalculate['weight'] = res.Weight;
      this._dataForCalculate['target'] = res.Target;

      this.calculateSuplies();
    })
    
    
  }

  public afterMeatStep(data: {changeVisiblity: boolean, selectedFood: IMeatType}) {
    this.selectedFood = data.selectedFood;
    this.toggleComponentMeat = data.changeVisiblity;
  }

  public setSelectedSuplies(data: ISuplie[]) {
    this._dataForCalculate['suplies'] = data;
  }

  public setDogInfo(data: { inputName: string, value: number }): void {
    this._dataForCalculate[data.inputName] = data.value;
  }

  public calculateSuplies(): void {
    const { daily, weight, target, suplies} = this._dataForCalculate;
    //calculate daily meal
    this.dailyMeal = (target * (daily / 100)) * 1000;
    this.dryMeal = this.dailyMeal - (this.dailyMeal * 0.7);
  }

}
