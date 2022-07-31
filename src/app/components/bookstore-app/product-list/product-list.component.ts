import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flatMap } from 'rxjs';
import { Book } from './model/domain/Book';
import { BooksService } from './model/service/book-service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: Book[] = [];


  constructor(private bookService: BooksService) {
  }


  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks() {
    this.bookService.getBooks().subscribe((data => {
      this.livros = data;
      console.log(this.livros)
    }))
  }
}