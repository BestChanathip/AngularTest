import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.scss'],
})
export class TaxAmountComponent {
  calculatedVat: string = '0';
  previousVal: number = 0;
  newVal: number = 0;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.calVat();
    this.initResetValue();
  }

  calVat() {
    this.dataService.inputValue$.subscribe((value) => {
      // this.calculatedVat = parseFloat((value * 0.07).toFixed(2));
      // this.dataService.calSurcharge(this.calculatedVat);
      let calVat = value * 0.07;
      this.previousVal = calVat;
      const number = parseFloat(calVat.toString().replace(/,/g, ''));

      this.calculatedVat = number.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      this.dataService.calSurcharge(parseFloat(this.calculatedVat));
    });
  }

  initResetValue() {
    this.dataService.eventResetValue$.subscribe((value) => {
      if (value) {
        this.calculatedVat = '0';
      }
    });
  }

  onInput(event: any) {
    const input = event.target.value;
    const numericInput = input.replace(/[^0-9.]/g, '');
    if (numericInput !== input) {
      event.target.value = numericInput;
    }

    this.newVal = parseFloat(event.target.value);

    this.calculatedVat = numericInput;
  }

  onFocus() {
    this.calculatedVat = this.calculatedVat.replace(/,/g, '');
  }

  onBlur() {
    let difference = Math.abs(this.newVal - this.previousVal);
    if (difference <= 20) {
      this.calculatedVat = this.newVal.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      this.dataService.calSurcharge(parseFloat(this.calculatedVat));
      this.dataService.calTotalAmount(parseFloat(this.calculatedVat), true);
    } else {
      this.calculatedVat = this.previousVal.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      this.dataService.calTotalAmount(this.previousVal, true);
    }
  }
}
