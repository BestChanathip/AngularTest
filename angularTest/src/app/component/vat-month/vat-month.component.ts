import { Component, Input } from '@angular/core';
import { MONTHS } from 'src/app/constant/month-constant';
import { SummaryService } from 'src/app/shared/summary.service';

@Component({
  selector: 'app-vat-month',
  templateUrl: './vat-month.component.html',
  styleUrls: ['./vat-month.component.scss']
})
export class VatMonthComponent {

  constructor(private summaryService: SummaryService) {}

  @Input() selectedValue: string | undefined;

  months =MONTHS;
  currentYear: number = new Date().getFullYear();
  selectedMonth!: string;
  selectedYear!: string;
 

  getYears(): number[] {
    const years: number[] = [];
    const startYear = 2020;
    for (let year = startYear; year <= this.currentYear; year++) {
      years.push(year);
    }
  
    return years;
  }

  onSelectYear() {
    this.selectedMonth = '';
    this.summaryService.setMonth(this.selectedMonth);
    this.summaryService.setYear(this.selectedYear);
  }
  
  onSelectMonth() {
    this.summaryService.setMonth(this.selectedMonth);
  }

  isMonthDisabled(selectedYear: string, month: { name: string, value: string }): boolean {
    const today = new Date();
    const selectedDate = new Date(parseInt(selectedYear), MONTHS.findIndex(m => m.value === month.value));
  
    return selectedDate > today;
  }
  
  
}
