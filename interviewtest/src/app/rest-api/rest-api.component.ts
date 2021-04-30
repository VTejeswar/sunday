import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../rest-api.service';
declare var $: any;
// const place = null as google.maps.places.PlaceResult;
// type googleComponents = typeof place.address_components;
@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestAPIComponent implements OnInit {
  result:any=[]
  constructor(private service:RestAPIService,private http:HttpClient) { }

  selecteddata;

 ngOnInit(){
  var tok_data="534564653267858975894485094805"
  sessionStorage.setItem("AUTHORIZATION",JSON.stringify(tok_data));
  // this.geet()
  console.log('STARTED PROCESS');
  let a=this.hh();
  console.log('after visit api');
  a.then((suu)=>{console.log(suu)},(errr)=>{console.log(errr)})
  this.ggg();
}

async hh(){
console.log('entering to api function');
const jnjn=await fetch("https://api.github.com/users");
console.log("Before resss");
const usrss=await jnjn.json();
console.log("USERS RESOLVER");
return usrss;
}
f:any=[];
ggg(){
  this.service.getData().subscribe((dt)=>{
    this.f=dt
  });
}
// toPromise method is Promise object. In order to use async/await style, you need at first wrap your code with async function, by prepending async 
// keyword to function, and then with await keyword tell your code to wait for async operation. In your case it's http re/quest.
  
      selectSort(dt){
      console.log(dt)
        if(dt=='A-Z'){
          this.f=this.f.sort((dt,dtt)=>{
            return dt.name < dt.name ? 1: -1
          })
        }else{
          this.f=this.f.sort((dt,dtt)=>{
            return dt.name > dt.name ? 1: -1
          })
        }
      }
}
