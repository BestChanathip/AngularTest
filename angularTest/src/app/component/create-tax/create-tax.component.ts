import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaxData } from 'src/app/model/tax-data-model';
import { DataService } from 'src/app/shared/data.service';
import { SummaryService } from 'src/app/shared/summary.service';
@Component({
  selector: 'app-create-tax',
  templateUrl: './create-tax.component.html',
  styleUrls: ['./create-tax.component.scss'],

})
export class CreateTaxComponent {
  constructor(private dataService: DataService,private summaryService: SummaryService) {}
  selectedType: string | undefined  = '0'; 

  ngOnInit() {
    // this.initSummary();
  }

  onValueChanged(value: string) {
    this.selectedType = value;
    this.dataService.onSelectResetVale();
  }

  onClickBack(){
    window.location.reload();
  }

  onClickNext(){
    this.initSummary();
  }

  initSummary(){
    this.summaryService.objTaxData$.subscribe((value: TaxData) => {
      console.log('value :>> ', value);
    });
  }
 
}
