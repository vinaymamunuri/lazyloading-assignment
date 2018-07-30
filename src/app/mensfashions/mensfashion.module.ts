import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { MensfashionsComponent } from './mensfashions.component';
import { JeansComponent } from './jeans/jeans.component';
import { ShirtsComponent } from './shirts/shirts.component';



const route:Routes=[
      
    {path:'',component:MensfashionsComponent,children:[
   
        {path:'jeans',component:JeansComponent},
        {path:'shirts',component:ShirtsComponent}]
       }

   
  ]
   

@NgModule({
  declarations: [
      MensfashionsComponent,
      JeansComponent,
      ShirtsComponent
  
   
    
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(route)
  
  ],
  providers: [],
  bootstrap: []
})
export class MensfashionModule { }
