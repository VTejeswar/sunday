import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    array:any=[]
    constructor(){

    }
    ngOnInit(){
      this.array=[
        {id:0,city:"Gunupur",dist:"Rayagada",state:"Odisha"},
        {id:0,city:"Vizag",dist:"Vizag",state:"Andhra"},
        {id:0,city:"Hyderabad",dist:"Hyderabad",state:"Telangana"},
        {id:0,city:"Paralakhemundi",dist:"Paralakhemundi",state:"Gajapati"},
        {id:0,city:"Rayagada",dist:"Rayagada",state:"Odisha"},
        {id:0,city:"Rajole",dist:"Vizayanagaram",state:"Andhra"},
        {id:0,city:"Khamamr",dist:"Hyderabad",state:"Hyderabad"},
        {id:0,city:"Padampur",dist:"Rayagada",state:"Odisha"}
      ];
    };
    
};
