import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { concat, fromEvent, interval } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
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
// arr:any=['apple','apple','mango','orange','lemon','banana','guabha','kiwi']
api:any=[];
main:any=[];
arrr:any=[
  {id:1,name:"teja1"},
  {id:2,name:"teja2"},
  {id:3,name:"teja3"},
  {id:4,name:"teja4"},
  {id:2,name:"teja5"},

]
  ngOnInit(): void {
    this.main=this.arrr
    this.search.valueChanges
    .pipe( 
      debounceTime(1000),
      distinctUntilChanged(),
      map((j) => {
        return j
      } ),
      // switchMap(data=>this.ser.gestData(data))
      switchMap(async (data) => {
        return data
      } )

    )
    .subscribe((d)=>{
      console.log(d.length,"mmm");
          if(d === " " || d==null || d== undefined ){
            this.main=this.arrr
            return;
          }else{
             var x = this.arrr.filter((dt)=>{return dt.id==d});
              if(x==undefined || x==null || x== "" || x==[]){
                alert('bledy')
              }else{
                this.main=x
              }
          }
   
    });
  }



  tg="angular"
  // gettt(){
  //     this.ser.gestData(this.tg).subscribe((res)=>{
  //       console.log(res)
  //       this.api=res
  //     })
// return this.ser.gestData(this.tg).toPromise()
  // }
}  


