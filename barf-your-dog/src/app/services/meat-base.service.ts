import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMeatType } from '../main-dashboard/interfaces/IMeatType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeatBaseService {

  private _apiUrl = 'http://127.0.0.1:5000/meat/';

  constructor(
    private http: HttpClient,
  ) { }

  public getAllMeats(): Observable<IMeatType[]> {
    return this.http.get<IMeatType[]>(`${this._apiUrl}all/`);
  }

  public getOneMeat(id: number) {
    return
  }
}
