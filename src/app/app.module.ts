import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobilesModule } from './mobiles/mobiles.module';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesModule } from './categories/categories.module';
import { MensfashionModule } from './mensfashions/mensfashion.module';









const route:Routes=[
  {path:'categories',loadChildren:'./categories/categories.module#CategoriesModule'},
  { path:'login',component:LoginComponent},
  {path:'mobiles',loadChildren:'./mobiles/mobiles.module#MobileModule'},
  {path:'mensfashion',loadChildren:'./mensfashions/mensfashion.module#MensfashionModule'}

   
  ]
   





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent
    
    
  ],
  imports: [
    BrowserModule,
    CategoriesModule,
    MobilesModule,
    MensfashionModule,
    RouterModule.forRoot(route)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
