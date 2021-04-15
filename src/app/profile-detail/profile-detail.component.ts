import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../appService/auth.service';
import { IProfileDetailModel, ProfileDetailModel } from './profile-detail.model';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  form: FormGroup
   data: any;
   formData: IProfileDetailModel;
profileDetails = new ProfileDetailModel();
  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private _authService: AuthService
  ) { }



  ngOnInit(): void {

    this.route.queryParams.subscribe((params)=>{

      console.log("details data----", params);
      this.data=JSON.parse(atob(params.data));
      console.log("my data-----", this.data);

      this.form = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        email: new FormControl(),
        avatar: new FormControl(),



     });

     this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],




  })


    })







  }



  onSubmit(id: number){

    console.log("update id: ", id);

    if(this.form.valid){
      console.log(this.form.value);
      this.profileDetails.first_name = this.form.value.first_name;
      this.profileDetails.last_name = this.form.value.last_name;
      this.profileDetails.email = this.form.value.email;



      this._authService.updateForm(this.profileDetails, id).subscribe(
        res=>{
        console.log(res)
         alert("Form updated Sucessfully");
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
