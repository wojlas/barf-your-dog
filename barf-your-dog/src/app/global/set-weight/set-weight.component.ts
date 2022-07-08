import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-weight',
  templateUrl: './set-weight.component.html',
  styleUrls: ['./set-weight.component.css']
})
export class SetWeightComponent implements OnInit {

  public cancelBtnText?: string = 'Anuluj';

  constructor() { }

  ngOnInit(): void {
  }

  public confirmBtnToggle() {}

  public cancelBtnToggle() {}

}
