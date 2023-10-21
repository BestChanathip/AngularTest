import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';
@Component({
  selector: 'app-create-tax',
  templateUrl: './create-tax.component.html',
  styleUrls: ['./create-tax.component.scss'],

})
export class CreateTaxComponent {
  constructor(private dataService: DataService) {}
  selectedValue: string | undefined  = '0'; 

  onValueChanged(value: string) {
    this.selectedValue = value;
    this.dataService.onSelectResetVale();
  }

  onClickBack(){
    window.location.reload();
  }
}
