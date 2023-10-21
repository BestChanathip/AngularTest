import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FILING_TYPES } from 'src/app/constant/filing-type-constant';
import { MatRadioChange } from '@angular/material/radio';
import { SummaryService } from 'src/app/shared/summary.service';
@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.scss'],
})
export class FilingTypeComponent {
  constructor(private summaryService: SummaryService) {}

  filingTypes = FILING_TYPES;
  selectedValue: string = '0';
  @Output() valueChanged = new EventEmitter<string>();

  ngOnInit() {
    this.setFilingType('0');
  }

  onRadioChange(event: MatRadioChange) {
    const selectedValue = event.value;
    this.valueChanged.emit(selectedValue);
    this.setFilingType(selectedValue);
  }

  setFilingType(type: string) {
    this.summaryService.setFilingType(type)
  }
}
