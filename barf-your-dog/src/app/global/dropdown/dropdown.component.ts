import { 
  Component, 
  ElementRef, 
  EventEmitter, 
  Input, 
  OnInit, 
  Output, 
  ViewChild 
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @ViewChild('defDropdown') selectedElement!: ElementRef;

  @Input() items: any[] = [];
  @Input() dropdownTag: string = '';
  @Input() placeholder!: string;

  @Output() selectedMeatId = new EventEmitter<number>();

  public isFirst: boolean = true;

  constructor() { }

  ngOnInit(): void {    
  }

  public addToList() {
    this.selectedMeatId.emit(this.selectedElement.nativeElement.value);
    this.isFirst = false;
  }

}
