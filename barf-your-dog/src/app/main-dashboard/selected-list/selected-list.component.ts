import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMeatType } from '../interfaces/IMeatType';
import { ITableHeader } from '../interfaces/ITableHeader';
import { ISuplie } from '../interfaces/ISuplie';

@Component({
  selector: 'app-selected-list',
  templateUrl: './selected-list.component.html',
  styleUrls: ['./selected-list.component.css']
})
export class SelectedListComponent implements OnInit {
  @Input() header: ITableHeader[] = [];
  @Input() contentMeat: IMeatType[] = [];
  @Input() set contentSuple(val: {suple: ISuplie, data: number}[]) {
    if (val) {
      this._suple = val;
      val.forEach(el => this.supleSummary = this.supleSummary + el.data);
    }
  };
  @Input() summary: any;

  @Output() deleteItem = new EventEmitter<IMeatType>();

  public supleSummary: number = 0;

  private _suple: {suple: ISuplie, data: number}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  get contentSuple(): {suple: ISuplie, data: number}[] {
    return this._suple;
  }

  onDeleteItem(item: IMeatType) {
      this.deleteItem.emit(item);
  }

}
