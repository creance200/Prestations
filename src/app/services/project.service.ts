import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'https://api.example.com'; // À adapter

  constructor(private http: HttpClient) {}

  getTasks(projectNumber: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tasks?project=${projectNumber}`);
  }

  submitEntry(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/entries`, payload);
  }
}
