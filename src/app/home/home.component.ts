import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../services/home-api.service'
import { PaginatePipe } from 'ngx-pagination/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
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
    

}
