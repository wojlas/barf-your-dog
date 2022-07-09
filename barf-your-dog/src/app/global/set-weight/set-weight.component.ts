import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-set-weight',
  templateUrl: './set-weight.component.html',
  styleUrls: ['./set-weight.component.css']
})
export class SetWeightComponent implements OnInit {

  public cancelBtnText?: string = 'Anuluj';
  public weightInputVal?: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modalDialog: MatDialogRef<SetWeightComponent>
  ) { }

  ngOnInit(): void {
    this.cancelBtnText = this.data.cancelBtnText;
  }

  public onInputChange(val: string) {
    this.weightInputVal = +val;
  }

  public confirmBtnToggle() {
    this.modalDialog.close({
      IsSuccess: true,
      SuccessCode: 'save',
      NewWeight: this.weightInputVal,
    });
  }

  public cancelBtnToggle() {
    this.modalDialog.close({
      IsSuccess: false,
      SuccessCode: 'cancel',
    });
  }

}
