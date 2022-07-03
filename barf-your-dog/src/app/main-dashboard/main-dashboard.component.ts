import { Component, OnInit } from '@angular/core';
import { MeatBaseService } from '../services/meat-base.service';
import { IMeatType } from './interfaces/IMeatType';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
