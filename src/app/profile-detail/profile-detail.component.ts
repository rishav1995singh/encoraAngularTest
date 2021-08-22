import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../appService/auth.service';
import { tableData } from '../dashboard/dashboard.component';
import { IProfileDetailModel, ProfileDetailModel } from './profile-detail.model';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','age'];
  //dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;




  // dataSource : any[] = [];
  dataSource: MatTableDataSource<tableData>;
  form: FormGroup
   data: any;
   formData: IProfileDetailModel;
   name:string='';
   country:string='';
   mobile:string='';
   company:string='';
profileDetails = new ProfileDetailModel();
  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private _authService: AuthService
  ) { }



  ngOnInit(): void {

    this.route.queryParams.subscribe((params)=>{

      // console.log("details data----", params);
      // this.data=JSON.parse(atob(params.data));
      // console.log("my data-----", this.data);

      this.form = new FormGroup({
        Name: new FormControl(),
        Country: new FormControl(),
        Phone: new FormControl(),
        Companies: new FormControl(),



     });

     this.form = this.fb.group({
      Name: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      Phone : ['', [Validators.required]],
      Companies : ['', [Validators.required]]





  })


    })







  }



  onSubmit(id: number){

    console.log("update id: ", id);

    if(this.form.valid){
      console.log(this.form.value);
      this.profileDetails.Name = this.form.value.Name;
      this.profileDetails.Country = this.form.value.Country;
      this.profileDetails.Companies = this.form.value.Companies;



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


  Adduser(){
    console.log(this.name,this.country,this.mobile,this.company);
    var name = this.name;
    var country =  this.country;
    var mobile =  this.mobile;
    var company = this.company;

    var tr = document.createElement('tr');
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
   

    td1.innerHTML = name;
    td2.innerHTML = country;
    td3.innerHTML = mobile;
    td4.innerHTML = company;
    td5.innerHTML = `<button class="btn btn-block btn-outline-danger">Delete</button>`;
    
    

    document.getElementById("tbl").appendChild(tr);
    

  }



  deluser(e){
    console.log(e);
    var s = e.parentNode.parentNode;
    s.parentNode.removeChild(s);

  }
  




}
