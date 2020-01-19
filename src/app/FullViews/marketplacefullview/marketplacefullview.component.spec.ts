import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplacefullviewComponent } from './marketplacefullview.component';

describe('MarketplacefullviewComponent', () => {
  let component: MarketplacefullviewComponent;
  let fixture: ComponentFixture<MarketplacefullviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplacefullviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplacefullviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
