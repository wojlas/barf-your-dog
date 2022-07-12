import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMeatType } from '../main-dashboard/interfaces/IMeatType';

@Injectable({
  providedIn: 'root'
})
export class VegetablesAndFruitsService {

  private _apiUrl = 'http://127.0.0.1:5000/vege/';
  
  constructor(private http: HttpClient) { }

  public getAllTips(): Observable<IMeatType[]> {
    return this.http.get<IMeatType[]>(`${this._apiUrl}all/`)
  }

  public getOneTip(id: number) {
    return
  }
}
