import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Country } from '../models/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "https://restcountries.com/v2"

  constructor(private http:HttpClient) { }

  getAll():Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/all`);
  }

  getCountryByName(name:string):Observable<Country> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${name}`).pipe(map(res=>res[0]))
  }

getCountryByCodes(codes:string[]) {
  return this.http.get<Country[]>(`${this.apiUrl}/alpha?codes=${codes.join(',')}`)
}  
}
