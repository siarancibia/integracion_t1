import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../services/home-api.service'
import { PaginatePipe } from 'ngx-pagination/public-api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingredient-home',
  templateUrl: './ingredient-home.component.html',
  styleUrls: ['./ingredient-home.component.css']
})
export class IngredientHomeComponent {
  searchTerm: string = '';
  itemsPerPage=10;
  currentPage=1;
  public ingredients:Array<any>=[]

  constructor(
    private apiService: HomeApiService
  ){

    this.apiService.getIngredients().subscribe((resp: any)=>{
      console.log(resp)
      this.ingredients = resp["items"]
    })

  }

  sortTable(columnName: string, order: string) {
    if (order === 'asc' && columnName === 'name') {
      this.ingredients.sort((a, b) => a[columnName].localeCompare(b[columnName]));
    } else if (order === 'desc'&& columnName === 'name') {
      this.ingredients.sort((a, b) => b[columnName].localeCompare(a[columnName]));
    } else if (order === 'asc'&& columnName === 'price') {
      this.ingredients.sort((a, b) => a.price - b.price);
    } else if (order === 'desc'&& columnName === 'price') {
      this.ingredients.sort((a, b) => b.price - a.price);
    }

  }

  performSearch(){
    console.log('Searching for: ', this.searchTerm);
  }
    

}
