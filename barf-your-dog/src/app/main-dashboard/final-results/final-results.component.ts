import { Component, Input, OnInit } from '@angular/core';
import { ISuplie } from '../interfaces/ISuplie';
import { ITableHeader } from '../interfaces/ITableHeader';

@Component({
  selector: 'app-final-results',
  templateUrl: './final-results.component.html',
  styleUrls: ['./final-results.component.css']
})
export class FinalResultsComponent implements OnInit {

  @Input() set supliesArr(val: {suple: ISuplie, data: number}[]) {
    if (val) {
      this._suplies = val;
    }
  }

  public finalHeader: ITableHeader[] = [
    {
      Name: 'Suplement',
      Width: 70,
    },
    {
      Name: 'gram',
      Width: 30,
    },
  ];

  public isVisible = true;

  private _suplies: any;

  constructor() { }

  ngOnInit(): void {
  }

  get supliesArr(): {suple: ISuplie, data: number}[] {
    return this._suplies;
  }

}
