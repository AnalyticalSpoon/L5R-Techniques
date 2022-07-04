import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, of } from 'rxjs';
import { Technique } from './technique';

@Injectable({
  providedIn: 'root',
})
export class TechniquesDataService {
  constructor(private http: HttpClient) {}

  private apiBaseUrl = environment.apiBaseUrl;

  public getTechniques(): Observable<Technique[]> {
    const url: string = `${this.apiBaseUrl}/techniques`;
    return this.http
      .get<Technique[]>(url)
      .pipe(catchError(this.handleError<Technique[]>([])));
  }

  public getTechniqueById(techniqueId: string): Observable<Technique> {
    const url: string = `${this.apiBaseUrl}/techniques/${techniqueId}`;
    return this.http
      .get<Technique>(url)
      .pipe(catchError(this.handleError<Technique>()));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
