import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  constructor(private httpp:HttpClient) { }

  getData(){
    return this.httpp.get("https://restcountries.eu/rest/v2/all");
    // return this.httpp.get("https://jsonplaceholder.typicode.com/postys");

    
  }
  gestData(dd){
    return this.httpp.get("http://my-json-server.typicode.com/Uxtrendz/apis/videoList"+'?q='+dd);
    // return this.httpp.get("https://jsonplaceholder.typicode.com/postys");

    
  }
}
  