import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeApiService } from '../services/home-api.service';

@Component({
  selector: 'app-tray-page',
  templateUrl: './tray-page.component.html',
  styleUrls: ['./tray-page.component.css']
})
export class TrayPageComponent {

  public tray!: any;

  constructor(private activatedRoute: ActivatedRoute,
    private apiService:HomeApiService){
     
    activatedRoute.params.subscribe((params:any)=>{
      this.apiService.getSingularTray(params['id']).subscribe((resp:any)=>{
        console.log(resp)
        this.tray = resp
      })
    })
  }

}
