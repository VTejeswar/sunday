import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { concat, fromEvent, interval } from 'rxjs';
import { concatMap, debounceTime, distinctUntilChanged, map, retry, switchMap } from 'rxjs/operators';
import { RestAPIService } from '../rest-api.service';
@Component({
  selector: 'app-debouncing',
  templateUrl: './debouncing.component.html',
  styleUrls: ['./debouncing.component.css']
})
export class DebouncingComponent implements OnInit {

  constructor(private http:HttpClient,private ser:RestAPIService) { };
  textt:any;
  coutt:any;
  search:FormControl=new FormControl();
arr:any=['apple','apple','mango','orange','lemon','banana','guabha','kiwi']
api:any=[]
  ngOnInit(): void {
    this.search.valueChanges
    .pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      map((j) => j),
      switchMap(data=>this.ser.gestData(data))
    )
    .subscribe((d)=>{
    console.log(d),'3'  
    });
  }
  tg="angular"
  gettt(){
//  this.ser.gestData().subscribe((res)=>{
//    console.log(res)
//    this.api=res
//  })
return this.ser.gestData(this.tg).toPromise()
  }
}  


