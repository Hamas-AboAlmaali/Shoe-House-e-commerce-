import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-card/product-details/product-details.component';
import { ProductFormComponent } from './components/product-card/product-form/product-form.component';


const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'products', component: ProductCardComponent},
  {path:'products/:id', component: ProductDetailsComponent},
  {path:'products/:id/edit', component: ProductFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
