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
    },
    {
      Id: 2,
      Name: 'Tran z dorsza',
      Weight: 100,
      iE: 12000,
    },
    {
      Id: 3,
      Name: 'Olej z dzikiego łososia',
      Weight: 100,
      iE: 13900,
    },
    {
      Id: 4,
      Name: 'Algi',
      Weight: 100,
      Jod: 82.1,
      JodDemand: 0.15
    },
    {
      Id: 5,
      Name: 'Skorupki jaj',
      Weight: 100,
    },
    {
      Id: 6,
      Name: 'Drożdże',
      Weight: 100
    }
  ]

  constructor() { }

  public getAllSuplies() {
    return this.supliesBase;
  }
}
