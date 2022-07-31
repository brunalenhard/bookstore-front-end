import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './components/bookstore-app/book-form/book-form.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{path:'', component: HomeComponent},
{path: 'home', component: HomeComponent },
{path: 'cadastro', component: BookFormComponent},
{path:'produtos', component: BookstoreAppComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
