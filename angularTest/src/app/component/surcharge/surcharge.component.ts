import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { convertCurrency } from 'src/app/utils/utils';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.scss']
})
export class SurchargeComponent {
  constructor(private dataService: DataService) {}
  calculatedSurcharge: string ='0';

  ngOnInit() {
    this.calSurcharge();
    this.initResetValue();
  }

  calSurcharge() {
    this.dataService.inputValueSurcharge$.subscribe((value) => {
      this.calculatedSurcharge = convertCurrency(value)
    });
  }

  initResetValue() {
    this.dataService.eventResetValue$.subscribe((value) => {
      if (value) {
        this.calculatedSurcharge = '0.00';
      }
    });
  }
}
