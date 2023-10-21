import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.scss'],
})
export class TaxAmountComponent {
  calculatedVat: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.calVat();
    this.initResetValue();
  }

  calVat() {
    this.dataService.inputValue$.subscribe((value) => {
      this.calculatedVat = parseFloat((value * 0.07).toFixed(2));
      this.dataService.calSurcharge(this.calculatedVat);
    });
  }

  initResetValue() {
    this.dataService.eventResetValue$.subscribe((value) => {
      if (value) {
        this.calculatedVat = 0;
      }
    });
  }
}
