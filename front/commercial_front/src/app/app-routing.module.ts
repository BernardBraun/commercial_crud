import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListProductsComponent } from './views/list-products/list-products.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "list-products",
  component: ListProductsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
