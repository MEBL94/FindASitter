import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Sitter } from 'src/app/entities/sitter';

const API_URL = "https://localhost:5001/api/";
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

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getSittersOLD() {
    return this.http.get(API_URL, {responseType: 'text'});
  }

  getSitterOLD(id: number) {
    return this.http.get(API_URL + id.toString());
  }

  createSitterOLD(sitter: Sitter) {
    return this.http.post(API_URL, sitter, {responseType: 'text'});
  }

  updateSitterOLD(sitter: Sitter) {
    return this.http.put(API_URL, sitter, {responseType: 'text'});
  }

  deleteSitterOLD(id: number) {
      return this.http.delete(API_URL + id.toString());
  }

  getSitters(): Observable<Sitter[]> {
    return this.http.get<Sitter[]>(API_URL + 'sitter');
  }
  
  getSitter(id : number): Observable<any> {
    return this.http.get(API_URL + id).pipe(
      map(this.extractData));
  }
  
  createSitter(sitter : Sitter): Observable<any> {
    console.log(sitter);
    return this.http.post<any>(API_URL, JSON.stringify(sitter), httpOptions).pipe(
      tap((sitter) => console.log(`added sitter w/ id=${sitter.id}`)),
      catchError(this.handleError<any>('createSitter'))
    );
  }
 
  
  updateSitter (id : number, sitter: Sitter): Observable<any> {
    return this.http.put(API_URL + 'sitter/' + id, JSON.stringify(sitter), httpOptions).pipe(
      tap(_ => console.log(`updated sitter id=${id}`)),
      catchError(this.handleError<any>('updateSitter'))
    );
  }
  
  deleteSitter(id): Observable<any> {
    return this.http.delete<any>(API_URL + 'sitter/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted sitter id=${id}`)),
      catchError(this.handleError<any>('deleteSitter'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
