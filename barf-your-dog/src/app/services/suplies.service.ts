import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupliesService {

  public supliesBase: any[] = [
    {
      Id: 1,
      Name: 'Omega3',
      Weight: 100,
      EPA: 197,
      isChecked: true,
    },
    {
      Id: 2,
      Name: 'Tran z dorsza',
      Weight: 100,
      iE: 12000,
      isChecked: true,
    },
    {
      Id: 3,
      Name: 'Olej z dzikiego łososia',
      Weight: 100,
      iE: 13900,
      isChecked: false,
    },
    {
      Id: 4,
      Name: 'Algi',
      Weight: 100,
      Jod: 82.1,
      JodDemand: 0.15,
      isChecked: true,
    },
    {
      Id: 5,
      Name: 'Skorupki jaj',
      Weight: 100,
      isChecked: true,
    },
    {
      Id: 6,
      Name: 'Drożdże',
      Weight: 100,
      isChecked: true,
    }
  ]

  constructor() { }

  public getAllSuplies() {
    return this.supliesBase;
  }

  public isCheckedToggle(id: number) {
    this.supliesBase.forEach(el => {

      if (el.Id === id) {
        el.isChecked = !el.isChecked;
      }
    })
  }
}
