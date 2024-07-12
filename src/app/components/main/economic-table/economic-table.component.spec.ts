import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicTableComponent } from './economic-table.component';

describe('EconomicTableComponent', () => {
  let component: EconomicTableComponent;
  let fixture: ComponentFixture<EconomicTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EconomicTableComponent]
    });
    fixture = TestBed.createComponent(EconomicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
