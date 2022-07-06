import { Injectable } from '@angular/core';
import { IMeatType } from '../main-dashboard/interfaces/IMeatType';

@Injectable({
  providedIn: 'root'
})
export class VegetablesAndFruitsService {

  public vegeBase: IMeatType[] = [
    {
      Id: 1,
      Name: 'Marchewka',
      Weight: 100,
      Kcal: 41,
      Protein: 0.9,
      Fats: 0.2,
    },
    {
      Id: 2,
      Name: 'Brokuł',
      Weight: 100,
      Kcal: 34,
      Protein: 2.8,
      Fats: 0.3,
    },
    {
      Id: 3,
      Name: 'Truskawka',
      Weight: 100,
      Kcal: 32,
      Protein: 0.7,
      Fats: 0.3,
    },
    {
      Id: 4,
      Name: 'Burak',
      Weight: 100,
      Kcal: 43,
      Protein: 1.61,
      Fats: 0.17,
    },
  ]

  constructor() { }

  public getAllTips() {
    return this.vegeBase;
  }

  public getOneTip(id: number) {
    return [...this.vegeBase.filter(el => el.Id === id)];
  }
}
