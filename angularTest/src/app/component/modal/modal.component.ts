import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() customText: string = '';
  constructor(public  dialogRef: MatDialogRef<ModalComponent>) {
    console.log('Received custom text in dialog component:', this.customText); 
  }

  closeDialog() {
    this.dialogRef.close('Dialog closed');
  }
}
