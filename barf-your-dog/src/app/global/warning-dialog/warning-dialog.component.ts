import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { IWarningDialogData } from '../Interfaces/IWarningDialogData';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.css']
})
export class WarningDialogComponent implements OnInit {

  @Output() confirmDialog = new EventEmitter<boolean>();

  public headerText: string = '';
  public contentText: string = '';
  public discardBtnText: any;
  public confirmBtnText: string = 'Ok';

  public openWarning: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modalDialog: MatDialogRef<WarningDialogComponent>
  ) { }

  ngOnInit(): void {    
    this.headerText = this.data.headerText;
    this.contentText = this.data.contentText;
    this.confirmBtnText = this.data.confirmBtnText; 
    this.discardBtnText = this.data.discardBtnText ? this.data.discardBtnText : null; 
    this.openWarning = true;
  }

  public confirmWindow() {
    this.modalDialog.close();
  }

  public discardWindow() {
    
  }

}
