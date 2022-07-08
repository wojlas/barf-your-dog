import { Component, Inject, Input, OnInit } from '@angular/core';
import { IWarningDialogData } from '../Interfaces/IWarningDialogData';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalService } from '../mo'

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.css']
})
export class WarningDialogComponent implements OnInit {

  public headerText: string = '';
  public contentText: string = '';
  public discardBtnText: any;
  public confirmBtnText: string = 'Ok';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modal: ModalService,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    
    this.headerText = this.data.headerText;
    this.contentText = this.data.contentText;
    this.confirmBtnText = this.data.confirmBtnText; 
    this.discardBtnText = this.data.discardBtnText ? this.data.discardBtnText : null; 
  }

  public confirmWindow() {

  }

  public discardWindow() {
    
  }

}
