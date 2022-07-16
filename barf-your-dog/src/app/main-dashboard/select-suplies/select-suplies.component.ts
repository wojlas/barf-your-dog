import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SupliesService } from 'src/app/services/suplies.service';
import { ISuplie } from '../interfaces/ISuplie';

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

  @Output() setSuplies = new EventEmitter<ISuplie[]>();

  public allSuplies: ISuplie[] = [];
  public isVisible = false;


  constructor(
    private supliesService: SupliesService,
    ) { }

  ngOnInit(): void {
    this.supliesService.getAllSuplies().subscribe(res => {
     
      if (res) {
        this.allSuplies = res;

        this.allSuplies.forEach(el => {

          if (el.isChecked === 'true') {
            el.isChecked = true;
          } else if (el.isChecked === 'false') {
            el.isChecked = false;
          };
        });
        
      }
      this.setSuplies.emit(this.allSuplies.filter(el => el.isChecked));
    });

  }

  public onCheckToggle(id: number) {
    this.allSuplies.forEach(el => {
      
      if (el.Id === id) {
        el.isChecked = !el.isChecked;

        if (el.Name === 'Tran z dorsza' || el.Name === 'Olej z dzikiego łososia') {
          this.twoSupliesToggle(el.Id, el.isChecked);
        }
      }
    })

    this.setSuplies.emit(this.allSuplies.filter(el => el.isChecked));
  }

  public twoSupliesToggle(id: number, value: boolean): void {

    if (this.allSuplies[id - 1].Name === 'Tran z dorsza') {
      this.allSuplies[id].isChecked = !value;
    };

    if (this.allSuplies[id - 1].Name === 'Olej z dzikiego łososia') {
      this.allSuplies[id - 2].isChecked = !value;
    };
    
  }

}
