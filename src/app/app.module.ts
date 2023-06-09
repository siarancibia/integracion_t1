import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, FormStyle } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { TrayPageComponent } from './tray-page/tray-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { IngredientPageComponent } from './ingredient-page/ingredient-page.component';
import { CourseHomeComponent } from './course-home/course-home.component';
import { IngredientHomeComponent } from './ingredient-home/ingredient-home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TrayPageComponent,
    CoursePageComponent,
    IngredientPageComponent,
    CourseHomeComponent,
    IngredientHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
