import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FILING_TYPES } from '../constant/filing-type-constant';
import { MONTHS } from '../constant/month-constant';
import { TaxData } from '../model/tax-data-model';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  constructor() {}

  // inputFilingType: string = '';
  // inputMonth: string = '';
  // inputYear: string = '';
  // inputSaleAmount: number = 0;
  // inputTaxAmount: number = 0;
  // inputSurcharge: number = 0;
  // inputPenalty: number = 200;
  // inputTotalAmount: number = 0;

  taxData: TaxData = {
    filingType: '',
    month: '',
    year: '',
    saleAmount: 0,
    taxAmount: 0,
    surcharge: 0,
    penalty: parseFloat((200).toFixed(2)),
    totalAmount: 0,
  };

  private objTaxData = new BehaviorSubject<TaxData>(this.taxData);
  objTaxData$ = this.objTaxData.asObservable();

  setFilingType(type: string) {
    const foundType = FILING_TYPES.find((e) => e.value === type);
    if (foundType) {
      // this.inputFilingType = foundType.name;
      this.taxData.filingType = foundType.name;
    }
  }

  setMonth(month: string) {
    console.log('month :>> ', month);
    const foundMonth = MONTHS.find((e) => e.value === month);
    if (month === '') {
      this.taxData.month = '';
    }
    if (foundMonth) {
      console.log('foundMonth :>> ', foundMonth);
      this.taxData.month = foundMonth.name;
      // this.inputMonth = foundMonth.name;
    }
  }

  setYear(year: string) {
    // this.inputYear = year;
    this.taxData.year = year;
  }

  calculateAll(saleAmount: number) {
    // this.inputSaleAmount = saleAmount;
    // this.inputTaxAmount = saleAmount * 0.07;
    // this.inputSurcharge = this.inputTaxAmount * 0.1;
    // this.inputTotalAmount =
    //   this.inputTaxAmount + this.inputSurcharge + this.inputPenalty;
    let taxVal = parseFloat((saleAmount * 0.07).toFixed(2));
    let surchargeVal = parseFloat((taxVal * 0.1).toFixed(2));
    let totalVal = taxVal + surchargeVal + 200;
    this.taxData.saleAmount = parseFloat(saleAmount.toFixed(2));
    this.taxData.taxAmount = taxVal;
    this.taxData.surcharge = surchargeVal;
    this.taxData.totalAmount = parseFloat(totalVal.toFixed(2));
  }

  summary() {
    this.objTaxData.next(this.taxData);
  }
}
