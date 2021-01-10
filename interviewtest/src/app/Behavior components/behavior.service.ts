import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {
// name= new Subject<string>();
namess = new BehaviorSubject('AMULU');
name=this.namess.asObservable();


RS=new ReplaySubject<number>(2);

ASYNCS=new AsyncSubject();
  constructor() { }
  nextVal(vaL:string){
    this.namess.next(vaL);
  }
}
