import { Component, OnInit } from '@angular/core';

import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { DndDropEvent } from 'ngx-drag-drop';
declare var $: any;

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  Addsection = "openSection";

    constructor(  ) { }

  ngOnInit() {
  }






















 tabledata=[
   {id:1,name:'satish',city:'hyderabad',country:'india',study:'Science',age:22},
   {id:2,name:'smita',city:'bengalore',country:'india',study:'b-tech',age:18},
   {id:3,name:'gopal',city:'pune',country:'india',study:'diploma',age:25},
   {id:4,name:'krishna',city:'chenai',country:'india',study:'m-pharma',age:24},
   {id:5,name:'avinash',city:'kolkata',country:'india',study:'mca',age:16},
   {id:6,name:'murali',city:'delhi',country:'india',study:'bca',age:28},
   {id:7,name:'harish',city:'guragoan',country:'india',study:'math',age:25}

 ]

  draggable = {
    // note that data is handled with JSON.stringify/JSON.parse
    // only set simple data or POJO's as methods will be lost 
    data: "myDragData",
    effectAllowed: "all",
    disable: false,
    handle: false
  };

  onDragover(event:DragEvent) {
    console.log("dragover", JSON.stringify(event, null, 2));
  }
  xxx:any;
  onDrop(event:DndDropEvent) {
    this.xxx=''
    alert(event.data)
  this.xxx=event.data
    console.log("dropped",event.data);
  }
  details={}
  onDrop2(event:DndDropEvent) {
    this.details=''
    // this.xxx=''
    // alert(event.data)
  // this.xxx=event.data
    console.log("dropped",event);
    this.details=event.data;
  }
  openModal(content) {
    this.tabledata!=this.x;

    console.log(content)
    $('#' + content).modal('show')
  }
   x;
  updatetable(data,model){
    this.tabledata=[]
    this.x=data
    this.tabledata.push(this.x);
      document.getElementById('addSection').click();
  }
}
