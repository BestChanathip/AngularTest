import { Component, Input } from '@angular/core';
import { MONTHS } from 'src/app/constant/month-constant';

@Component({
  selector: 'app-vat-month',
  templateUrl: './vat-month.component.html',
  styleUrls: ['./vat-month.component.scss']
})
export class VatMonthComponent {
  @Input() selectedValue: string | undefined;

  months =MONTHS;
  currentYear: number = new Date().getFullYear();
 

  getYears(): number[] {
    const years: number[] = [];
    const startYear = 2020;
  
    for (let year = startYear; year <= this.currentYear; year++) {
      years.push(year);
    }
  
    return years;
  }
}
