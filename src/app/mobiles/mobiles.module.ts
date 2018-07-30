import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { MobilesComponent } from './mobiles.component';
import { RouterModule,Routes } from '@angular/router';
import { SamsungComponent } from './samsung/samsung.component';
import { OppoComponent } from './oppo/oppo.component';
import { RedmiComponent } from './redmi/redmi.component'





const route:Routes=[
    {path:'',component:MobilesComponent,children:[
   
        { path:'redmi',component:RedmiComponent},
        { path:'samsung',component:SamsungComponent},
        { path:'oppo',component:OppoComponent}]
       }

   
  ]
   


@NgModule({
  declarations: [
      MobilesComponent,
      SamsungComponent,
      OppoComponent,
      RedmiComponent

   
    
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  
  ],
  providers: [],
  bootstrap:[]
})
export class MobilesModule{ }
