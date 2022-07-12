import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDogWeight } from '../main-dashboard/interfaces/IDogWeight';

@Injectable({
  providedIn: 'root'
})
export class DogWeightService {

  private _apiUrl = 'http://127.0.0.1:5000/weight';

  constructor(private http: HttpClient) { }

  public getLastWeight(id: number): Observable<IDogWeight> {
    return this.http.get<IDogWeight>(`${this._apiUrl}/${id}/`)
  }

  public setNewWeight(id: number, weight: number) {
    // const myDog = this.dogWeightBase.filter(dog => dog.Id === id);
    // const lastWeightOfDog = myDog.reduce((first, next) => (first.WeightId > next.WeightId) ? first : next);
    
    // this.dogWeightBase.push({
    //   Id: lastWeightOfDog.Id,
    //   WeightId: lastWeightOfDog.WeightId + 1,
    //   Name: lastWeightOfDog.Name,
    //   Sex: lastWeightOfDog.Sex,
    //   Weight: weight,
    //   Date: new DataTransfer(),
    // });
    
  }
}
