import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.scss']
})
export class DeleteDataComponent {
  @Input() row: any;
  constructor(public dialogRef:MatDialogRef<DeleteDataComponent>) {
  }
  deleteEmp(){
    this.dialogRef.close(true)
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
