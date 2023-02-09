import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { Routes ,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobItemComponent } from './job-item/job-item.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes : Routes = [
  {path:"jobs/detail/:id",component:JobDetailComponent},
  {path:"",component:JobsListComponent},
  {path:"login" , component:LoginPageComponent}
  

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobsListComponent,
JobItemComponent,
JobDetailComponent,
LoginPageComponent

  ],
  imports: [
    BrowserModule,HttpClientModule  , ReactiveFormsModule ,RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
