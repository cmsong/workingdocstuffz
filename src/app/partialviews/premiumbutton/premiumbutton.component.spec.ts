import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumbuttonComponent } from './premiumbutton.component';

describe('PremiumbuttonComponent', () => {
  let component: PremiumbuttonComponent;
  let fixture: ComponentFixture<PremiumbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
