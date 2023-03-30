import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeApiService } from '../services/home-api.service';

@Component({
  selector: 'app-ingredient-page',
  templateUrl: './ingredient-page.component.html',
  styleUrls: ['./ingredient-page.component.css']
})
export class IngredientPageComponent {

  public ingredient!: any;
  public reviews!: any;
  
  formData = {
    entity_id: '',
    email: '',
    password: '',
    content: '',
    rating: 0
  }

  constructor(private activatedRoute: ActivatedRoute,
    private apiService:HomeApiService){
     
    activatedRoute.params.subscribe((params:any)=>{
      this.apiService.getSingularIngredient(params['id']).subscribe((resp:any)=>{
        console.log(resp)
        this.ingredient = resp
      })
    })

    activatedRoute.params.subscribe((params:any)=>{
      this.apiService.getReviews(params['id']).subscribe((resp:any)=>{
        console.log('reviews')
        console.log(resp)
        this.reviews = resp
      })
    })
  }

  sortReviews(columnName: string, order: string) {
    if (order === 'asc' && columnName === 'username') {
      this.reviews.sort((a: { [x: string]: string; }, b: { [x: string]: any; }) => a[columnName].localeCompare(b[columnName]));
    } else if (order === 'desc'&& columnName === 'username') {
      this.reviews.sort((a: { [x: string]: any; }, b: { [x: string]: string; }) => b[columnName].localeCompare(a[columnName]));
    } else if (order === 'asc'&& columnName === 'date') {
      this.reviews.sort((a: { [x: string]: any; }, b: { [x: string]: string; }) => a[columnName].localeCompare(b[columnName]));
    } else if (order === 'desc'&& columnName === 'date') {
      this.reviews.sort((a: { [x: string]: any; }, b: { [x: string]: string; }) => b[columnName].localeCompare(a[columnName]));
    }

  }

  postReview(){
    this.activatedRoute.params.subscribe((params:any)=>{
      this.formData['entity_id'] = params['id']
      let json_formData = JSON.stringify(this.formData)
      this.apiService.postSingularReview(this.formData).subscribe(
      res => {
        console.log('POST request successful:', res);
      },
      err => {
        console.error('POST request error:', err);
      }
    );
  });
}

}
