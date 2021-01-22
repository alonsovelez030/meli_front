import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Filters } from '../entities/core.entitie';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  public getProducts(filters: Filters): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/items/search?q=${filters.search}`);
  }
}
