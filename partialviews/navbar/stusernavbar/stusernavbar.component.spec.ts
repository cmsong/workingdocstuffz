import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StusernavbarComponent } from './stusernavbar.component';

describe('StusernavbarComponent', () => {
  let component: StusernavbarComponent;
  let fixture: ComponentFixture<StusernavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StusernavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StusernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
