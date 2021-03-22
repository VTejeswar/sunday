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
import { RestAPIComponent } from './rest-api/rest-api.component';
import { RestAPIService } from './rest-api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RestAPIInterceptor} from './rest-api.interceptor';
import { StarRatingComponentt } from './star-rating/star-rating.component';
import { RatingModule } from 'ng-starrating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebouncingComponent } from './debouncing/debouncing.component';
import { MaterialTabPageComponent } from './material-tab-page/material-tab-page.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    RestAPIComponent,
    StarRatingComponentt,
    DebouncingComponent,   
    MaterialTabPageComponent
    // RestAPIService
  ],
  imports: [
    BrowserModule,
    // DragDropModule,
    DndModule,
    RatingModule,
    NgxFileDropModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS,useClass:RestAPIInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
