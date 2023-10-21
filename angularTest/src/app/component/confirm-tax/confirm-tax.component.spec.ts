import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTaxComponent } from './confirm-tax.component';

describe('ConfirmTaxComponent', () => {
  let component: ConfirmTaxComponent;
  let fixture: ComponentFixture<ConfirmTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmTaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
