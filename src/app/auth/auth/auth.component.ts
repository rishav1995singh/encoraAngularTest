import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/appService/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

   form: FormGroup

  constructor(private fb:FormBuilder,
    private _authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

    this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]

    })
  }

  onSubmit(){
    if(this.form.valid){
    console.log(this.form.value);
    const email = this.form.value.email;
    const password = this.form.value.password;

    this._authService.login(email,password).subscribe(
      res=>{
      console.log(res)
     this.router.navigate(['dashboard'])
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
