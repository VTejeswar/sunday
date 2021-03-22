import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTabPageComponent } from './material-tab-page.component';

describe('MaterialTabPageComponent', () => {
  let component: MaterialTabPageComponent;
  let fixture: ComponentFixture<MaterialTabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
