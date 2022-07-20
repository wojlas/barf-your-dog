import { Component, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DogWeightService } from '../services/dog-weight.service';
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
  public supliesMixArr: {suple: ISuplie, data: number}[] = [];

  private _dataForCalculate: {daily: number, target: number, weight: number, suplies: ISuplie[]} = {
    daily: 0,
    target: 0,
    weight: 0,
    suplies: [],
  };
  

  constructor(
    private dogWeightService: DogWeightService,
    private modal: MatDialog,
    ) { }

  ngOnInit(): void {
    this.dogWeightService.getLastWeight(1).subscribe((res) => {
      this.lastDogWeight = res;
      this._dataForCalculate.daily = res.DailyMeal;
      this._dataForCalculate.weight = res.Weight;
      this._dataForCalculate.target = res.Target;

      this.calculateSuplies();
    })
    
    
  }

  public afterMeatStep(data: {changeVisiblity: boolean, selectedFood: IMeatType}) {
    this.selectedFood = data.selectedFood;
    this.toggleComponentMeat = data.changeVisiblity;
  }

  public setSelectedSuplies(data: ISuplie[]) {
    this._dataForCalculate.suplies = data;

    this.calculateSuplies();
    
  }

  public setDogInfo(data: { inputName: string, value: number }): void {
    if (data.inputName === 'weight') {
      this._dataForCalculate.weight = data.value;
    } else if (data.inputName === 'daily') {
      this._dataForCalculate.daily = data.value;
    } else if (data.inputName === 'target') {
      this._dataForCalculate.target === data.value;
    }

    this.calculateSuplies();
    
  }

  public calculateSuplies(): void {    
    this.supliesMixArr = [];
    const { daily, weight, target, suplies} = this._dataForCalculate;
    //calculate daily meal
    this.dailyMeal = (target * (daily / 100)) * 1000;
    this.dryMeal = this.dailyMeal - (this.dailyMeal * 0.7);

    //calculate Omega3
    const omega = suplies.filter(el => el.Name === 'Omega3')[0];
    if (omega) {
      const dailyEPADemand = weight * (omega.dailyDemand ? omega.dailyDemand : 1);
      const resultOmega = dailyEPADemand / ((omega.EPA ? omega.EPA : 1) * 1000);
      this.supliesMixArr.push({suple: omega, data: +this.toDecimal(resultOmega, 3)});
    }

    //calculate CodLiver
    const liver = suplies.filter(el => el.Name === 'Tran z dorsza')[0];
    if (liver) {
      const doseCod = (liver.dogDemand ? liver.dogDemand : 1) * weight;
      const resultLiver = doseCod / ((liver.iE ? liver.iE : 1) / 100);
      this.supliesMixArr.push({suple: liver, data: +this.toDecimal(resultLiver, 3)});
    }

    //calculate Salmon Oil
    const oil = suplies.filter(el => el.Name === 'Olej z dzikiego łososia')[0];
    if (oil) {
      const doseOil = (oil.dogDemand ? oil.dogDemand : 1) * weight;    
      const resultOil = doseOil / ((oil.iE ? oil.iE : 1) / 100);
      this.supliesMixArr.push({suple: oil, data: +this.toDecimal(resultOil, 3)});
    }

    //calculate algae
    const algae = suplies.filter(el => el.Name === 'Algi')[0];
    if (algae) {
      const dryMeal = +this.toDecimal(this.dailyMeal - (this.dailyMeal * 0.7), 2);
      const doseAlgae = (algae.Jod ? algae.Jod : 1) / 1000;
      const doseJOD = ((algae.JodDemand ? algae.JodDemand : 1) / 10) * dryMeal;
      const resultAlgae = doseJOD / doseAlgae;
      this.supliesMixArr.push({suple: algae, data: +this.toDecimal(resultAlgae / 10, 3)});
    }

    //calculate shell
    const shell = suplies.filter(el => el.Name === 'Skorupki jaj')[0];
    if (shell) {
      const meatToMeal = (this.dailyMeal * 0.55) + (this.dailyMeal * 0.15) + (this.dailyMeal * 0.05);
      const doseShell = (shell.doseToGram ? shell.doseToGram : 1) / 1000;
      const resultShell = (doseShell * meatToMeal) / 2;
      this.supliesMixArr.push({suple: shell, data: +this.toDecimal(resultShell, 3)});
    }

    //calculate yeast
    const yeast = suplies.filter(el => el.Name === 'Drożdże')[0];
    if (yeast) {
      this.supliesMixArr.push({suple: yeast, data: 2});
    }
       
  }

  public toDecimal(figure: number, decimals = 0) {
    let d = Math.pow(10,decimals);
    return (figure * d/d).toFixed(decimals);
  };

  public setDailyMeal(gram: number) {
    this.dailyMeal = gram;
  }

}
