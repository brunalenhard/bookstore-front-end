import { Inject, Injectable  } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http"
import { Book} from "../domain/Book";
import { map } from "rxjs/operators"
import { Observable } from "rxjs";

@Injectable ()
export class BooksService{
    private url = 'http://localhost:8080/v1/books';

    httpOptions = {
        Headers: new HttpHeaders ({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){}

    getBooks(): Observable<Book[]>{
        return this.http.get<Pageable<Book>>(this.url).pipe(map(pageable => {
            return pageable.content;
        }))
    }

    createBook(book:Book): Observable<Book>{
        return this.http.post<Book>(this.url, book);
    }
}

class Pageable<T>{
    content!: T[];
}