import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Baby } from '../../entities/baby';
import { Observable } from 'rxjs';

const API_URL = "https://localhost:5001/api/baby/"

@Injectable({
  providedIn: 'root'
})
export class BabyService {
  constructor(private http: HttpClient) { }

  getBabies() {
    return this.http.get(API_URL);
  }

  getBaby(id: number) {
    return this.http.get(API_URL + id.toString());
  }

  createBaby(baby: Baby) {
    return this.http.post(API_URL, baby);
  }

  updateBaby(baby: Baby) {
    return this.http.put(API_URL, baby);
  }

  deleteBaby(id: number) {
      return this.http.delete(API_URL + id.toString());
  }
}
