import { Injectable } from '@angular/core';
import { IDogWeight } from '../main-dashboard/interfaces/IDogWeight';

@Injectable({
  providedIn: 'root'
})
export class DogWeightService {

  public dogWeightBase: IDogWeight[] = [
    {
      Id: 1,
      WeightId: 1,
      Name: 'Luna',
      Sex: 'F',
      Weight: 10.95,
      Date: new Date(),
    },
    {
      Id: 1,
      WeightId: 2,
      Name: 'Luna',
      Sex: 'F',
      Weight: 12.95,
      Date: new Date(),
    }
  ]

  constructor() { }

  public getLastWeight(id: number) {
    const myDog = this.dogWeightBase.filter(dog => dog.Id === id);
    return myDog.reduce((first, next) => (first.WeightId > next.WeightId) ? first : next);
  }

  public setNewWeight(id: number, weight: number) {
    const myDog = this.dogWeightBase.filter(dog => dog.Id === id);
    const lastWeightOfDog = myDog.reduce((first, next) => (first.WeightId > next.WeightId) ? first : next);
    
    this.dogWeightBase.push({
      Id: lastWeightOfDog.Id,
      WeightId: lastWeightOfDog.WeightId + 1,
      Name: lastWeightOfDog.Name,
      Sex: lastWeightOfDog.Sex,
      Weight: weight,
      Date: new DataTransfer(),
    });
    
  }
}
