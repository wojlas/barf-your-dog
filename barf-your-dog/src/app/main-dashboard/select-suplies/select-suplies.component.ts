import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SupliesService } from 'src/app/services/suplies.service';

@Component({
  selector: 'app-select-suplies',
  templateUrl: './select-suplies.component.html',
  styleUrls: ['./select-suplies.component.css']
})
export class SelectSupliesComponent implements OnInit {

  @Input() set changeVisible(val: boolean) {
    if (val) {
      this.isVisible = val;
    }
  }

  @Output() afterSupliesStep = new EventEmitter<{changeVisiblity: boolean, suplies: any[]}>();

  public allSuplies: any[] = [];
  public isVisible = false;


  constructor(
    private supliesService: SupliesService,
    ) { }

  ngOnInit(): void {
    this.allSuplies = this.supliesService.getAllSuplies();
  }

  public onCheck(id: number) {
    this.supliesService.isCheckedToggle(id);
    
  }

  public onNextStepHandler() {
    this.isVisible = false;
    let selectedSuplies = this.allSuplies.filter(el => el.isChecked)
    this.afterSupliesStep.emit({
      changeVisiblity: true,
      suplies: selectedSuplies,
    })
  }

}
