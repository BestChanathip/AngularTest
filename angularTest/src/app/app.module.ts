import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//custom component 
import { FilingTypeComponent } from './component/filing-type/filing-type.component';
import { VatMonthComponent } from './component/vat-month/vat-month.component';
import { TaxComputationComponent } from './component/tax-computation/tax-computation.component';
import { SaleAmountComponent } from './component/sale-amount/sale-amount.component';
import { TaxAmountComponent } from './component/tax-amount/tax-amount.component';
import { PenaltyComponent } from './component/penalty/penalty.component';
import { SurchargeComponent } from './component/surcharge/surcharge.component';
import { TotalAmountComponent } from './component/total-amount/total-amount.component';
import { HeadBarComponent } from './component/head-bar/head-bar.component';
import { CreateTaxComponent } from './component/create-tax/create-tax.component';
import { ConfirmTaxComponent } from './component/confirm-tax/confirm-tax.component';
//mat
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
//service
import { DataService } from './shared/data.service';
import { SummaryService } from './shared/summary.service';
import { ModalComponent } from './component/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadBarComponent,
    CreateTaxComponent,
    ConfirmTaxComponent,
    FilingTypeComponent,
    VatMonthComponent,
    TaxComputationComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    PenaltyComponent,
    SurchargeComponent,
    TotalAmountComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [DataService,SummaryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
