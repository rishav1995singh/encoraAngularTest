import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../appService/auth.service';

export interface tableData {
  id: any;
  first_name: any;
  last_name: any;
  avatar: any;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar','delete'];
  //dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;




  // dataSource : any[] = [];
  dataSource: MatTableDataSource<tableData>;


  constructor(private _authService: AuthService, private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
    ) {

    this._authService.getlist().subscribe(
      res=>{
        var tableData = res.data;
        this.dataSource = new MatTableDataSource(tableData);
        this.dataSource.paginator = this.paginator;
      //console.log(res);
      //this.dataSource = res.data;

    },
    err =>{
      console.log(err)
    }
    )
   }

  ngOnInit(): void {

  }

  openDialog(element: any){
    let data = {
      id: element.id,
      first_name: element.first_name,
      last_name: element.last_name,
      email: element.email,
      avatar: element.avatar

    }

    console.log("get ele:", data);
    this.router.navigate(['profileDetails'], {queryParams: {data: btoa(JSON.stringify(data))}})

  }



  remove(id: number){

    console.log("Deleted ID", id);
    if(confirm('Are you sure to delete?')){
      this._authService.deleteProfile(id).subscribe(res=>{


        // this.snackbar.open(res.toString(), '', {
        //   duration: 5000,
        //   verticalPosition:'top'
        // })

        if(res){
          alert("Profile deleted sucessfully");
        }

      });
    }


  }




}
