import { Component, OnInit } from '@angular/core';
import {BehaviorService} from '../behavior.service'
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private service:BehaviorService) { }
  subscribename;
  RPPP;
  arr=[];
  ngOnInit(): void {
    this.service.name.subscribe((res)=>{
      this.subscribename=res;
    })

    this.service.RS.subscribe((res)=>{
        // this.RPPP=res
        console.log(res);
        this.arr.push(res)
    })
  }
  comp1(data){
    // this.service.nextVal(data.value)
      this.service.RS.next(data.value);
  };
}
   