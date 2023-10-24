import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private inputValueSubject = new BehaviorSubject<number>(0);
  inputValue$ = this.inputValueSubject.asObservable();

  private eventResetValue = new BehaviorSubject<boolean>(true);
  eventResetValue$ = this.eventResetValue.asObservable();

  private inputValueSurcharge = new BehaviorSubject<number>(0);
  inputValueSurcharge$ = this.inputValueSurcharge.asObservable();

  private totalAmount = new BehaviorSubject<number>(0);
  totalAmount$ = this.totalAmount.asObservable();

  calTax(value: number) {
    this.inputValueSubject.next(value);
    this.calTotalAmount(value, false, );
  }

  calSurcharge(value: number) {
    let surcharge = parseFloat((value * 0.1).toFixed(2));
    this.inputValueSurcharge.next(surcharge);
  }

  onSelectResetVale() {
    this.eventResetValue.next(true);
  }

  calTotalAmount(value: number, isEditVat: boolean) {
    let pen = 200;
    if (!isEditVat) {
      let vat = value * 0.07;
      let sur = vat * 0.1;
      let total = parseFloat((vat + pen + sur).toFixed(2));
      this.totalAmount.next(total);
    } else {
      let sur = value * 0.1;
      let total = parseFloat((value + pen + sur).toFixed(2));
      this.totalAmount.next(total);
    }
  }

  resetTotalAmount(){
    this.totalAmount.next(0.00);
  }
}
