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
  file!: File;

  constructor(private bookService: BooksService,
    private formBuilder: FormBuilder,
    private router: Router) {

  }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      "name": ["", Validators.required],
      "author": ["", Validators.required],
      "price": ["", Validators.required],
      "quantity": ["", Validators.required],
      "category": ["", Validators.required],
      "img": ["", Validators.required],
      "file": ["", Validators.required]
    })
  }

  create() {
    console.log(this.bookForm.value);
    let book = this.bookForm.value;
    let fileReader = new FileReader();
    fileReader.onload = (result) => {
      let stringBase64 = btoa(fileReader.result as string);
      book.img = stringBase64;
      this.bookService.createBook(book).subscribe();
    } 
    fileReader.readAsBinaryString(this.bookForm.value.file);
    this.bookForm.reset();
  }

  goToCadastro() {
    this.router.navigate(['/cadastro']);
  }

  onFileChange(event: any) {
    this.bookForm.patchValue({
      "file": event.target.files[0]
    })
  }
}
