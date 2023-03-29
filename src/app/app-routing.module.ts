import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseHomeComponent } from './course-home/course-home.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { HomeComponent } from './home/home.component';
import { IngredientHomeComponent } from './ingredient-home/ingredient-home.component';
import { IngredientPageComponent } from './ingredient-page/ingredient-page.component';
import { TrayPageComponent } from './tray-page/tray-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'trays', component:HomeComponent},
  {path:'courses', component:CourseHomeComponent},
  {path:'ingredients', component:IngredientHomeComponent},
  {path:'trays/:id', component:TrayPageComponent},
  {path:'courses/:id', component:CoursePageComponent},
  {path:'ingredients/:id', component:IngredientPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
