import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HourTypeService {

  private apiUrl = 'https://api.example.com'; // À adapter

  constructor(private http: HttpClient) {}

  getHourTypes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/hour-types`);
  }
}
