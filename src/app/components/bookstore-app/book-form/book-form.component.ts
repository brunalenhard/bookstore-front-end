import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { BooksService } from '../product-list/model/service/book-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;
  constructor(private bookService: BooksService,
    private formBuilder: FormBuilder,
    private router: Router) {

  }

  ngOnInit(): void {
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
    this.bookForm.reset();
  }

  goToCadastro(){
    this.router.navigate(['/cadastro']);
  }
}
