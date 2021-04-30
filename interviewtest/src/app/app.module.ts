import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import {DragDropModule} from '@angular/cdk/drag-drop';
import { DndModule } from 'ngx-drag-drop';

import { NgxFileDropModule } from 'ngx-file-drop';
import { RestAPIComponent } from './rest-api/rest-api.component';
import { RestAPIService } from './rest-api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RestAPIInterceptor} from './rest-api.interceptor';
import { StarRatingComponentt } from './star-rating/star-rating.component';
import { RatingModule } from 'ng-starrating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebouncingComponent } from './debouncing/debouncing.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    RestAPIComponent,
    StarRatingComponentt,
    DebouncingComponent
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
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS,useClass:RestAPIInterceptor,multi:true}
  ],
  bootstrap: [DebouncingComponent]
})
export class AppModule { }
