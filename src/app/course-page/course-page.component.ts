import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeApiService } from '../services/home-api.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent {
  public course!: any;

  constructor(private activatedRoute: ActivatedRoute,
    private apiService:HomeApiService){
     
    activatedRoute.params.subscribe((params:any)=>{
      this.apiService.getSingularCourse(params['id']).subscribe((resp:any)=>{
        console.log(resp)
        this.course = resp
      })
    })
  }
}
