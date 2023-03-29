import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  // Define the URL of the API endpoint that retrieves trays
  private apiUrl = 'https://tarea-1.2023-1.tallerdeintegracion.cl/trays';

  constructor(
    private http: HttpClient
  ) { 
  console.log('servicio persona');
  }
  
  getTrays(){
    let trays_recibidas = new HttpHeaders()
      .set('Type-content', 'application/json')
    return this.http.get(this.apiUrl,{headers:trays_recibidas})


  }

}
