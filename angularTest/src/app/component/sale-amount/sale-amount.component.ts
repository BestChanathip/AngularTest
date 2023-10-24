import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';
import { SummaryService } from 'src/app/shared/summary.service';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.scss'],
})
export class SaleAmountComponent {
  constructor(
    private dataService: DataService,
    private summaryService: SummaryService
  ) {}

  // inputSaleAmount: number = 0;
  inputSaleAmount: string = '0.00';
  ngOnInit() {
    this.reset();
  }

  reset() {
    this.dataService.eventResetValue$.subscribe((value) => {
      if (value) {
        this.inputSaleAmount = '0.00';
      }
    });
  }

  onInput(event: any) {
    const input = event.target.value;
    const numericInput = input.replace(/[^0-9.]/g, '');
    if (numericInput !== input) {
      event.target.value = numericInput;
    }

    this.inputSaleAmount = numericInput;
  }

  onFocus() {
    this.inputSaleAmount = this.inputSaleAmount.replace(/,/g, '');
  }

  onBlur() {
    if (this.inputSaleAmount === '') {
      this.reset();
      this.dataService.calTax(0);
      this.dataService.resetTotalAmount();
    } else {
      this.dataService.calTax(parseFloat(this.inputSaleAmount));
    }
    this.summaryService.calculateAll(
      parseFloat(this.inputSaleAmount),
      false,
      0
    );
    const number = parseFloat(this.inputSaleAmount.replace(/,/g, ''));
    this.inputSaleAmount = number.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}
