import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadBarComponent } from './component/head-bar/head-bar.component';
import { CreateTaxComponent } from './component/create-tax/create-tax.component';
import { ConfirmTaxComponent } from './component/confirm-tax/confirm-tax.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FilingTypeComponent } from './component/filing-type/filing-type.component';
import { VatMonthComponent } from './component/vat-month/vat-month.component';
import { TaxComputationComponent } from './component/tax-computation/tax-computation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadBarComponent,
    CreateTaxComponent,
    ConfirmTaxComponent,
    FilingTypeComponent,
    VatMonthComponent,
    TaxComputationComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
