import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private myAppUrl: string;
  private myApiUrl: string;
  behaviorSubject = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/sales'
  }


  getSalesUser(id: number) {
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
  }
}
