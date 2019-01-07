import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sitter } from 'src/app/entities/sitter';

const API_URL = "https://localhost:5001/api/sitter/";

@Injectable({
  providedIn: 'root'
})
export class SitterService {
  constructor(private http: HttpClient) { }

  getSitters() {
    return this.http.get(API_URL);
  }

  getSitter(id: number) {
    return this.http.get(API_URL + id.toString());
  }

  createSitter(sitter: Sitter) {
    return this.http.post(API_URL, sitter, {responseType: 'text'});
  }

  updateSitter(sitter: Sitter) {
    return this.http.put(API_URL, sitter, {responseType: 'text'});
  }

  deleteSitter(id: number) {
      return this.http.delete(API_URL + id.toString());
  }
}
