import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SetWeightComponent } from '../global/set-weight/set-weight.component';
import { DogWeightService } from '../services/dog-weight.service';
import { IDogWeight } from './interfaces/IDogWeight';
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

  public lastDogWeight?: IDogWeight;

  constructor(
    private dogWeightService: DogWeightService,
    private modal: MatDialog,
    ) { }

  ngOnInit(): void {
    this.lastDogWeight = this.dogWeightService.getLastWeight(1);
  }

  public afterMeatStep(data: {changeVisiblity: boolean, selectedFood: IMeatType}) {
    this.selectedFood = data.selectedFood;
    this.toggleComponentMeat = data.changeVisiblity;
  }

  public afterSupliesStep(data: {changeVisiblity: boolean, suplies: any[]}) {
    this.toggleComponentSuplies = data.changeVisiblity;
    this.selectedSuplies = data.suplies;
  }

  public setWeight(id: number) {
    const modalConfig = new MatDialogConfig();

      modalConfig.disableClose = true;

      const weightModal = this.modal.open(SetWeightComponent, modalConfig);
      weightModal.afterClosed().subscribe(res => {
        if (res && res.IsSuccess) {
            this.dogWeightService.setNewWeight(id, res.NewWeight)
            this.lastDogWeight = this.dogWeightService.getLastWeight(id)
        }
      });
  }

}
