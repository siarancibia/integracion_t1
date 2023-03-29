import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  // Define the URL of the API endpoint that retrieves trays
  private apiUrl = 'https://tarea-1.2023-1.tallerdeintegracion.cl/';

  constructor(
    private http: HttpClient
  ) { 
  console.log('servicio api ok');
  }
  
  getTrays(){
    let trays_recibidas = new HttpHeaders().set('Type-content', 'application/json')
    let apiUrl_trays = `${this.apiUrl}/trays`;
    return this.http.get(apiUrl_trays,{headers:trays_recibidas})
  }

  getSingularTray(tray_id: any){
    let tray_recibida = new HttpHeaders().set('Type-content', 'application/json')
    let apiUrl_id = `${this.apiUrl}/trays/${tray_id}`;
    console.log('esta es la url con que se realiza la solicitud');
    console.log(apiUrl_id);
    return this.http.get(apiUrl_id,{headers:tray_recibida})
  }


}
