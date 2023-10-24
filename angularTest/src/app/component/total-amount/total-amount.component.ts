import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { convertCurrency } from 'src/app/utils/utils';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.scss'],
})
export class TotalAmountComponent {
  constructor(private dataService: DataService) {}
  calculatedTotalAmount: string = '0';

  ngOnInit() {
    this.calTotalAmount();
    this.initResetValue();
  }

  calTotalAmount() {
    this.dataService.totalAmount$.subscribe((value) => {
      this.calculatedTotalAmount = convertCurrency(value);
    });
  }


  initResetValue() {
    this.dataService.eventResetValue$.subscribe((value) => {
      if (value) {
        this.calculatedTotalAmount = '0.00';
      }
    });
  }
}
