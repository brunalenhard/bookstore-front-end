import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { ProductListComponent } from './components/bookstore-app/product-list/product-list.component';

const routes: Routes = [
  {path: 'sobre', component: BookstoreAppComponent},
  {path: 'cadastro', component: ProductListComponent},
  {path: 'produtos', component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
