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
  bookForm!: FormGroup;


  constructor(private bookService: BooksService, private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.fetchBooks();
    this.bookForm = this.formBuilder.group({
      "name": ["", Validators.required],
      "author": ["", Validators.required],
      "price": ["0", Validators.required],
      "quantity": ["", Validators.required],
      "category": ["", Validators.required]
    })

  }

  create() {
    console.log(this.bookForm.value);
    this.bookService.createBook(this.bookForm.value).subscribe();
    this.fetchBooks();
    this.bookForm.reset();
  }

  fetchBooks() {
    this.bookService.getBooks().subscribe((data => {
      this.livros = data;
      console.log(this.livros)
    }))
  }
}
