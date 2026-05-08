import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HourTypesApiResponse } from '../HourTypesApiResponse';

@Injectable({
  providedIn: 'root'
})
export class HourTypeService {

  //private apiUrl = 'http://tour-stiis-001:83/api/Heure'; // À adapter
  private apiUrl = 'http://localhost:49573//api/Heure'; // À adapter

  constructor(private http: HttpClient) {}

  getHourTypes(): Observable<HourTypesApiResponse> {
    return this.http.get<HourTypesApiResponse>(`${this.apiUrl}/Get?numeroProjet=013078abt&steNom=Samyn&stePrenom=Leon`);
  }
}
