import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOfferComponent } from './components/create/createOffer.component';
import { GetAllComponent } from './components/get-all/get-all.component';
import { GetOneComponent } from './components/get-one/get-one.component';
import { UpdateComponent } from './components/update/update.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [ 
 
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "getAll",
    component: GetAllComponent
  },{
    path: "create",
    component: CreateOfferComponent
  },
  {
    path: "update/:id",
    component: UpdateComponent
  },
  {
    path: "get/:id",
    component: GetOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
  


}
