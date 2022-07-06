import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMeatType } from '../interfaces/IMeatType';
import { ITableHeader } from '../interfaces/ITableHeader';

@Component({
  selector: 'app-selected-list',
  templateUrl: './selected-list.component.html',
  styleUrls: ['./selected-list.component.css']
})
export class SelectedListComponent implements OnInit {
  @Input() header: ITableHeader[] = [];
  @Input() content: IMeatType[] = [];
  @Input() summary: any;

  @Output() deleteItem = new EventEmitter<IMeatType>();

  constructor() { }

  ngOnInit(): void {
    
  }

  onDeleteItem(item: IMeatType) {
      this.deleteItem.emit(item);
  }

}
