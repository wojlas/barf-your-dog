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

  @Output() selectedMeatId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public addToList() {
    this.selectedMeatId.emit(this.selectedElement.nativeElement.value);
  }

}
