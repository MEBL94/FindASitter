import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Sitter } from 'src/app/entities/sitter';

const API_URL = "http://angular2api2.azurewebsites.net/api/internships";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SitterService {
  constructor(private http: HttpClient) { }

  getSitters() : Observable<Sitter[]> {
    return this.http.get<Sitter[]>(API_URL, httpOptions);
  }
  
  getSitter(id : number) : Observable<Sitter> {
    return this.http.get<Sitter>(API_URL + id, httpOptions);
  }
  
  createSitter(sitter : Sitter) : Observable<Sitter> {
    sitter.customerId = "mathias";
    return this.http.post<Sitter>(API_URL, sitter, httpOptions);
  }
 
  updateSitter (id : number, sitter: Sitter) : Observable<Sitter> {
    return this.http.put<Sitter>(API_URL + id, sitter, httpOptions);
  }
  
  deleteSitter(id) : Observable<Sitter> {
    return this.http.delete<Sitter>(API_URL + id, httpOptions);
  }
}
