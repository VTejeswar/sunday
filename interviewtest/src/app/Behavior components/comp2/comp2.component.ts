import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { BehaviorService } from '../behavior.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private service:BehaviorService) { }
  subscribename:string="SABRISH";
  arr=[];  

  ngOnInit(): void {
    this.service.name.subscribe((res)=>{
      this.subscribename=res;
    })
  }

  comp2(data){
    console.log(data.value);
    this.service.nextVal(data.value)

  }

  clickRP(){
    this.arr=[]
    this.service.RS.subscribe((res)=>{
      // this.RPPP=res
      console.log(res);
      this.arr.push(res)
  })
  }
}
