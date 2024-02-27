import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ALATI_URL, PROIZVOD_BY_ID_URL, PROIZVOD_URL, RASVETA_URL, SANITARIJA_URL } from '../constants/urls';
import { Observable } from 'rxjs';
import { Proizvod } from '../models/Proizvod';



@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Proizvod[]>{
    return this.http.get<Proizvod[]>(PROIZVOD_URL);
  }
  getAlati(): Observable<Proizvod[]>{
    return this.http.get<Proizvod[]>(ALATI_URL);
  }
  getRasveta(): Observable<Proizvod[]>{
    return this.http.get<Proizvod[]>(RASVETA_URL);
  }
  getSanitarija(): Observable<Proizvod[]>{
    return this.http.get<Proizvod[]>(SANITARIJA_URL);
  }
  getProizvodById(proizvodId:string):Observable<Proizvod>{
    return this.http.get<Proizvod>(PROIZVOD_BY_ID_URL + proizvodId)
  }
}
