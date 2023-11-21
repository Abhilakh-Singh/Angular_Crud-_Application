import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss']
})
export class List2Component implements OnInit {
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  empForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<List2Component>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this._fb.group({
      Name: ['',Validators.required],
      Email: this.emailFormControl, 
      Address: ['',Validators.required],
      DOB:  ['',Validators.required],
      Gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            alert("Employee updated successfully");
            this._dialogRef.close(true); 
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert("Employee added successfully");
            this._dialogRef.close(true); 
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

  validationMessages = {
    name: {
      required: 'Name is required.',
      name: 'plz enter valid name',
      
    },
    email: {
      required: 'Email is required.',
      email: 'Please enter a valid email address.',
    },
    address: {
      required: 'Address is required.',
      address: 'Please enter a valid address.',
    },
    dob: {
      required: 'Date of Birth is required.',
      dob: 'Please enter a valid dob.',
    },
    gender: {
      required: 'Gender is required.',
    },
  };
}
