import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsejosAutomotricesPage } from './consejos-automotrices.page';

describe('ConsejosAutomotricesPage', () => {
  let component: ConsejosAutomotricesPage;
  let fixture: ComponentFixture<ConsejosAutomotricesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsejosAutomotricesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
