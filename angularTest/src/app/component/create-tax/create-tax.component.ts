import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-create-tax',
  templateUrl: './create-tax.component.html',
  styleUrls: ['./create-tax.component.scss'],

})
export class CreateTaxComponent {
  selectedValue: string | undefined  = '0'; 

  onValueChanged(value: string) {
    this.selectedValue = value;
    console.log('this.selectedValue :>> ', this.selectedValue);
  }
}
