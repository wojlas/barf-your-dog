import { Injectable } from '@angular/core';
import { IMeatType } from '../main-dashboard/interfaces/IMeatType';

@Injectable({
  providedIn: 'root'
})
export class MeatBaseService {

  public meatBase: IMeatType[] = [
    {
      Id: 1,
      Name: 'Filet z kurczaka',
      Weight: 100,
      Kcal: 284,
      Protein: 53.4,
      Fats: 6.2,
    },
    {
      Id: 2,
      Name: 'Filet z indyka',
      Weight: 100,
      Kcal: 102,
      Protein: 24,
      Fats: 1,
    },
    {
      Id: 3,
      Name: 'Serca z kurczaka',
      Weight: 100,
      Kcal: 153,
      Protein: 16,
      Fats: 9.3,
    },
    {
      Id: 4,
      Name: 'Wątroba z kurczaka',
      Weight: 100,
      Kcal: 136,
      Protein: 19.1,
      Fats: 6.3,
    },
    
  ];

  constructor() { }

  public getAllMeats() {
    return this.meatBase;
  }

  public getOneMeat(id: number) {
    return [...this.meatBase.filter(el => el.Id === id)];
  }
}
