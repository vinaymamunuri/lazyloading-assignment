import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';

import { OfferszoneComponent } from './offerszone/offerszone.component';
import { KidsComponent } from './kids/kids.component';



const route:Routes=[
    {path:'',component:CategoriesComponent,children:[
   
     { path:'kids',component:KidsComponent},
    {path:'offerszone',component:OfferszoneComponent}]
    }
   ]


@NgModule({
  declarations: [
      CategoriesComponent,
      KidsComponent,
      OfferszoneComponent
   
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  
  ],
  providers: [],
  bootstrap: []
})
export class CategoriesModule {
    
 }
