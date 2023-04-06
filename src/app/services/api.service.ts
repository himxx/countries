import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "https://restcountries.com/v3.1"

  constructor(private http:HttpClient) { }

  getAll():Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/all`);
  }
  
}
