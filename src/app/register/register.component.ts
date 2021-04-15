import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../appService/auth.service';
import { RegisterDetailModel } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  registerData = new RegisterDetailModel();

  constructor(
    private fb:FormBuilder,
    private _authService: AuthService,
    private router: Router
    ) { }

    ngOnInit(): void {

      this.form = this.fb.group({
          firstName: ['', [Validators.required]],
          lastName: ['', [Validators.required]],
          contactNumber : ['', [Validators.required, Validators.minLength(10)]],
          address : ['', [Validators.required]],
          email : ['', [Validators.required, Validators.email]],
          pincode : ['', [Validators.required, Validators.minLength(6)]],



      })
    }

  onSubmit(){

      if(this.form.valid){
    console.log(this.form.value);
    this.registerData.firstName = this.form.value.firstName;
    this.registerData.lastName = this.form.value.lastName;
    this.registerData.contactNumber = this.form.value.contactNumber;
    this.registerData.address = this.form.value.address;
    this.registerData.email = this.form.value.email;
    this.registerData.pincode = this.form.value.pincode;


    this._authService.saveForm(this.registerData).subscribe(
      res=>{
      console.log(res)
     this.router.navigate(['login'])
    },
    err =>{
      console.log(err)
    }
    )

    }
    else{
      alert("Please fill the form Properly");
    }

  }

}
