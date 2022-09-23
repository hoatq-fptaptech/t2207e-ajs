import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {FoodComponent} from "./food/food.component";
import {HttpClientModule} from "@angular/common/http";

// khai bao cac page trong website
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'food', component: FoodComponent}
]
@NgModule({
  declarations: [
    AppComponent, StudentComponent,ClassroomComponent,
    HomeComponent,LoginComponent,FoodComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
