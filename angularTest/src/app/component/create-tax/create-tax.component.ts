import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaxData } from 'src/app/model/tax-data-model';
import { DataService } from 'src/app/shared/data.service';
import { SummaryService } from 'src/app/shared/summary.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-tax',
  templateUrl: './create-tax.component.html',
  styleUrls: ['./create-tax.component.scss'],
})
export class CreateTaxComponent {
  constructor(
    private router: Router,
    private dataService: DataService,
    private summaryService: SummaryService,
    private snackBar: MatSnackBar
  ) {}
  selectedType: string | undefined = '0';

  ngOnInit() {
    // this.initSummary();
  }

  onValueChanged(value: string) {
    this.selectedType = value;
    this.dataService.onSelectResetVale();
  }

  onClickBack() {
    window.location.reload();
  }

  onClickNext() {
    this.initSummary();
  }

  initSummary() {
    this.summaryService.objTaxData$.subscribe((value: TaxData) => {
      console.log('value :>> ', value);

      const emptyOrZeroProperties = Object.keys(value).filter((key) => {
        return (value as any)[key] === '' || (value as any)[key] === 0;
      });

      if (emptyOrZeroProperties.length > 0) {
       let message =
          'please fill following data >> ' +
            emptyOrZeroProperties.join(', ')
        this.openSnackBar(message);
      } else {
        this.router.navigate(['/confirmTax']);
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Dismiss', {
      duration: 8000,
      verticalPosition: 'bottom', 
    horizontalPosition: 'center', 
    });
  }
}
