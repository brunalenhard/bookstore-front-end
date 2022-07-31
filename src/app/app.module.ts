import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './components/bookstore-app/filters/filters.component';
import { ProductListComponent } from './components/bookstore-app/product-list/product-list.component';
import { ProductItemComponent } from './components/bookstore-app/product-list/product-item/product-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BooksService } from './components/bookstore-app/product-list/model/service/book-service';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './components/bookstore-app/book-form/book-form.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    BookFormComponent,
    HomeComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    routing
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
