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
  constructor(private dataService: DataService, private summaryService:SummaryService) {}

  inputSaleAmount: number = 0;

  ngOnInit() {
   this.reset()
  }

  reset(){
    this.dataService.eventResetValue$.subscribe((value) => {
      if (value) {
        this.inputSaleAmount =0;
      }
    });
  }

  onBlur() {
    this.dataService.calTax(this.inputSaleAmount);
    this.summaryService.calculateAll(this.inputSaleAmount);
  }
}
