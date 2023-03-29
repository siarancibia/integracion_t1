import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../services/home-api.service'
import { PaginatePipe } from 'ngx-pagination/public-api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  searchTerm: string = '';
  itemsPerPage=10;
  currentPage=1;
  public trays:Array<any>=[]

  constructor(
    private apiService: HomeApiService
  ){

    this.apiService.getTrays().subscribe((resp: any)=>{
      console.log(resp)
      this.trays = resp["items"]
    })

  }

  sortTable(columnName: string, order: string) {
    if (order === 'asc' && columnName === 'name') {
      this.trays.sort((a, b) => a[columnName].localeCompare(b[columnName]));
    } else if (order === 'desc'&& columnName === 'name') {
      this.trays.sort((a, b) => b[columnName].localeCompare(a[columnName]));
    } else if (order === 'asc'&& columnName === 'price') {
      this.trays.sort((a, b) => a.price - b.price);
    } else if (order === 'desc'&& columnName === 'price') {
      this.trays.sort((a, b) => b.price - a.price);
    }

  }

  performSearch(){
    console.log('Searching for: ', this.searchTerm);
  }
    

}
