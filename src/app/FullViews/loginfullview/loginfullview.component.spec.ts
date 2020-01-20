import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfullviewComponent } from './loginfullview.component';

describe('LoginfullviewComponent', () => {
  let component: LoginfullviewComponent;
  let fixture: ComponentFixture<LoginfullviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginfullviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginfullviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
