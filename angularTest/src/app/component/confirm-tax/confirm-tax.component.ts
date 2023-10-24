import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaxData } from 'src/app/model/tax-data-model';
import { SummaryService } from 'src/app/shared/summary.service';
import { convertCurrency } from 'src/app/utils/utils';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
ModalComponent;
@Component({
  selector: 'app-confirm-tax',
  templateUrl: './confirm-tax.component.html',
  styleUrls: ['./confirm-tax.component.scss'],
})
export class ConfirmTaxComponent {
  constructor(
    private summaryService: SummaryService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  taxData: TaxData = {};

  ngOnInit() {
    this.initSummary();
  }

  initSummary() {
    this.summaryService.objTaxData$.subscribe((value: TaxData) => {
      // const emptyOrZeroProperties = Object.keys(value).filter((key) => {
      //   return (value as any)[key] === '' || (value as any)[key] === 0;
      // });
      // if (emptyOrZeroProperties.length > 0) {
      //   this.router.navigate(['']);
      // }

      this.taxData = value;
      this.taxData.penaltyCurrency =
        this.taxData.penalty !== undefined
          ? convertCurrency(this.taxData.penalty)
          : '';
      this.taxData.totalAmountCurrency =
        this.taxData.totalAmount !== undefined
          ? convertCurrency(this.taxData.totalAmount)
          : '';
      this.taxData.surchargeCurrency =
        this.taxData.surcharge !== undefined
          ? convertCurrency(this.taxData.surcharge)
          : '';
      this.taxData.taxAmountCurrency =
        this.taxData.taxAmount !== undefined
          ? convertCurrency(this.taxData.taxAmount)
          : '';
      this.taxData.saleAmountCurrency =
        this.taxData.saleAmount !== undefined
          ? convertCurrency(this.taxData.saleAmount)
          : '';
    });
  }

  onClickBack() {
    window.location.href = '/';
  }

  onClickConfirm() {
    this.openDialog();
  }

  openDialog() {
    let message = JSON.stringify(this.taxData);
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        message: message,
      },
    });
  }
}
