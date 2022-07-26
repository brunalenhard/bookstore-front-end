import { Inject, Injectable  } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http"
import { Book} from "./model/book";




@Injectable ()
export class BooksService{
    private url = 'http://localhost:4200/';

    httpOptions = {
        Headers: new HttpHeaders ({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){}

    getBack(){
        return this.http.get(this.url)
    }
}