import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISuplie } from '../main-dashboard/interfaces/ISuplie';

@Injectable({
  providedIn: 'root'
})
export class SupliesService {

  private _apiUrl = 'http://127.0.0.1:5000/suplies/';

  constructor(private http: HttpClient) { }

  public getAllSuplies(): Observable<ISuplie[]> {
    return this.http.get<ISuplie[]>(`${this._apiUrl}all`);
  }

}
