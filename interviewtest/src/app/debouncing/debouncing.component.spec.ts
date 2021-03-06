import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DebouncingComponent } from './debouncing.component';

describe('DebouncingComponent', () => {
  let component: DebouncingComponent;
  let fixture: ComponentFixture<DebouncingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DebouncingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouncingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
