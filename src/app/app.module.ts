import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobilesModule } from './mobiles/mobiles.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesModule } from './categories/categories.module';
import { MensfashionModule } from './mensfashions/mensfashion.module';
import { LaptopsComponent } from './laptops/laptops.component';
import { DynamicComponent } from './laptops/dynamic/dynamic.component';
// import { FilterPipe } from './filter.pipe';











const route: Routes = [
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesModule' },
  { path: 'login', component: LoginComponent },
  { path: 'mobiles', loadChildren: './mobiles/mobiles.module#MobilesModule' },
  { path: 'mensfashion', loadChildren: './mensfashions/mensfashion.module#MensfashionModule' },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'laptops/:id', component: DynamicComponent }


]






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    LaptopsComponent,
    DynamicComponent,
  


  ],
  imports: [
    BrowserModule,
    CategoriesModule,
    MensfashionModule,
    RouterModule.forRoot(route),
    MobilesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
