import { Component, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-tax-computation',
  templateUrl: './tax-computation.component.html',
  styleUrls: ['./tax-computation.component.scss']
})
export class TaxComputationComponent {
  @Input() selectedValue: string | undefined;

}
