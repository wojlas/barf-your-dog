import { Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDogWeight } from 'src/app/main-dashboard/interfaces/IDogWeight';
import { DogWeightService } from 'src/app/services/dog-weight.service';

@Component({
  selector: 'app-set-weight',
  templateUrl: './set-weight.component.html',
  styleUrls: ['./set-weight.component.css']
})
export class SetWeightComponent implements OnInit {

  @Output() newWeightObj = new EventEmitter<IDogWeight>();

  public cancelBtnText?: string = 'Anuluj';
  public weightInputVal = '';
  public selectedDog?: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modalDialog: MatDialogRef<SetWeightComponent>,
    private dogWeight: DogWeightService,
  ) { }

  ngOnInit(): void {
    this.cancelBtnText = this.data.cancelBtnText;
    this.selectedDog = this.data;
  }

  public onInputChange(val: string) {
    this.weightInputVal = val;
  }

  public confirmBtnToggle() {
    // const newWeight: IDogWeight = {
    //   Id: this.selectedDog.Id,
    //   WeightId: this.selectedDog.WeightId + 1,
    //   Name: this.selectedDog.Name,
    //   FullName: this.selectedDog.FullName,
    //   Sex: this.selectedDog.Sex,
    //   Weight: +this.weightInputVal
    // }

    // this.dogWeight.setNewWeight(newWeight).subscribe(res => console.log(res));

    // this.modalDialog.close({
    //   IsSuccess: true,
    //   SuccessCode: 'save',
    //   NewWeight: newWeight,
    // });
  }

  public cancelBtnToggle() {
    this.modalDialog.close({
      IsSuccess: false,
      SuccessCode: 'cancel',
    });
  }

}
