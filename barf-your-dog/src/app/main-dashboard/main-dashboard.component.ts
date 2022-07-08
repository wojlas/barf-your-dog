import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IMeatType } from './interfaces/IMeatType';

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

  constructor(private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public afterMeatStep(data: {changeVisiblity: boolean, selectedFood: IMeatType}) {
    this.selectedFood = data.selectedFood;
    this.toggleComponentMeat = data.changeVisiblity;
  }

  public afterSupliesStep(data: {changeVisiblity: boolean, suplies: any[]}) {
    this.toggleComponentSuplies = data.changeVisiblity;
    this.selectedSuplies = data.suplies;
  }

}
