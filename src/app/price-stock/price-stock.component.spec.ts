import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceStockComponent } from './price-stock.component';

describe('PriceStockComponent', () => {
  let component: PriceStockComponent;
  let fixture: ComponentFixture<PriceStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
