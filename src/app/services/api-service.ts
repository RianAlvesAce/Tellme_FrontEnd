import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlBase: string = environment.apiUrl;

  constructor(private http: HttpClient) {}
  
}
