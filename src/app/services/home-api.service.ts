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

  getCourses(){
    let courses_recibidos = new HttpHeaders().set('Type-content', 'application/json')
    let apiUrl_courses = `${this.apiUrl}/courses`;
    return this.http.get(apiUrl_courses,{headers:courses_recibidos})
  }

  getIngredients(){
    let ingredients_recibidos = new HttpHeaders().set('Type-content', 'application/json')
    let apiUrl_ingredients = `${this.apiUrl}/ingredients`;
    return this.http.get(apiUrl_ingredients,{headers:ingredients_recibidos})
  }

  getSingularTray(tray_id: any){
    let tray_recibida = new HttpHeaders().set('Type-content', 'application/json')
    let apiUrl_id = `${this.apiUrl}/trays/${tray_id}`;
    console.log('esta es la url con que se realiza la solicitud');
    console.log(apiUrl_id);
    return this.http.get(apiUrl_id,{headers:tray_recibida})
  }

  getSingularCourse(course_id: any){
    let course_recibido = new HttpHeaders().set('Type-content', 'application/json')
    let apiUrl_id = `${this.apiUrl}/courses/${course_id}`;
    return this.http.get(apiUrl_id,{headers:course_recibido})
  }

  getSingularIngredient(ingredient_id: any){
    let ingredient_recibido = new HttpHeaders().set('Type-content', 'application/json')
    let apiUrl_id = `${this.apiUrl}/ingredients/${ingredient_id}`;
    return this.http.get(apiUrl_id,{headers:ingredient_recibido})
  }

  getReviews(entity_id: any){
    let reviews_recibidos = new HttpHeaders().set('Type-content', 'application/json')
    let apiUrl_id = `${this.apiUrl}/reviews/${entity_id}`;
    console.log('esta es la url con que se realiza la solicitud');
    console.log(apiUrl_id);
    return this.http.get(apiUrl_id,{headers:reviews_recibidos})
  }

  postSingularReview(review: any) {
    let apiUrl_id = `${this.apiUrl}reviews`;
    console.log('Este es el review que se posteara:', review);
    console.log('Esta es la URL con que se realiza la solicitud:', apiUrl_id);
    
    return this.http.post(apiUrl_id, review);
  }

}
