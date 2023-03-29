import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';
import { HomeComponent } from './home/home.component';
import { TrayPageComponent } from './tray-page/tray-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'trays/:id', component:TrayPageComponent},
  {path:'courses/:id', component:CoursePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
