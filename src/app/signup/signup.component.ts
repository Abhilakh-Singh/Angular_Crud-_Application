import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;
  data: any;

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private router:Router
  
    
      ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userForm.patchValue(this.data);
  }

  getValue() {
    if (this.userForm.valid) {
      this.signupService.addprofile(this.userForm.value).subscribe(
        (val: any) => {
          alert('Registered successfully');
          this.userForm.reset();
          this.router.navigate(['login']);
        }
      );
    }
  }
  cancel() {
    this.userForm.reset(); 
  }
  
}
