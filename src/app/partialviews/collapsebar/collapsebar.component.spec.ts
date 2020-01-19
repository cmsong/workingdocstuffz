import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsebarComponent } from './collapsebar.component';

describe('CollapsebarComponent', () => {
  let component: CollapsebarComponent;
  let fixture: ComponentFixture<CollapsebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
