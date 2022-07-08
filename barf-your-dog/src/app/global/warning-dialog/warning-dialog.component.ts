import { Component, Input, OnInit } from '@angular/core';
import { IWarningDialogData } from '../Interfaces/IWarningDialogData';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.css']
})
export class WarningDialogComponent implements OnInit {

  @Input() data!: IWarningDialogData;

  public headerText: string = '';
  public contentText: string = '';
  public discardBtnText: any;
  public confirmBtnText: string = 'Ok';

  constructor() { }

  ngOnInit(): void {; 
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
