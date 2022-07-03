import { Component, OnInit } from '@angular/core';
import { MeatBaseService } from 'src/app/services/meat-base.service';
import { IMeatType } from '../interfaces/IMeatType';

@Component({
  selector: 'app-meat-selection',
  templateUrl: './meat-selection.component.html',
  styleUrls: ['./meat-selection.component.css']
})
export class MeatSelectionComponent implements OnInit {

  public selectedMeats: IMeatType[] = [];

  constructor(private meatService: MeatBaseService) { }

  ngOnInit(): void {
    this.selectedMeats = this.meatService.getAllMeats();
  }

}
