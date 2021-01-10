import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import {DragDropModule} from '@angular/cdk/drag-drop';
import { DndModule } from 'ngx-drag-drop';

import { NgxFileDropModule } from 'ngx-file-drop';
import { MainComponent } from './Behavior components/main/main.component';
import { Comp1Component } from './Behavior components/comp1/comp1.component';
import { Comp2Component } from './Behavior components/comp2/comp2.component';
import { Comp3Component } from './Behavior components/comp3/comp3.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule,
    // DragDropModule,
    DndModule,
    NgxFileDropModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
