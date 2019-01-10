import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Baby } from '../../entities/baby';
import { Observable } from 'rxjs';

const API_URL = "http://angular2api2.azurewebsites.net/api/internships/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BabyService {
  constructor(private http: HttpClient) { }

  getBabies() : Observable<Baby[]>{
    return this.http.get<Baby[]>(API_URL, httpOptions);
  }

  getBaby(id: number) : Observable<Baby> {
    return this.http.get<Baby>(API_URL + id, httpOptions);
  }

  createBaby(baby: Baby) : Observable<Baby> {
    baby.customerId = "mathias";
    return this.http.post<Baby>(API_URL, baby, httpOptions);
  }

  updateBaby(baby: Baby) : Observable<Baby> {
    return this.http.put<Baby>(API_URL, baby, httpOptions);
  }

  deleteBaby(id: number) : Observable<Baby> {
      return this.http.delete<Baby>(API_URL + id, httpOptions);
  }
}
