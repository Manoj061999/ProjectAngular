import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdetails = new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    mobile : new FormControl('')
  })
  user: any;
  userdata: any;

  LoginDetails = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })
  login: any;
  loginuser: any;
  constructor(private route : ActivatedRoute , private router : Router , private data : DataService ) { }

  ngOnInit() {
  }

  UserFunction(){
    console.log(this.userdetails.value);
  }
  LoginFunction(){
    console.log(this.LoginDetails.value);
  }



  UserDataFun(){
    this.data.Addusers(this.userdetails).subscribe((data: {})=> {
      console.log(data);
      this.user = data;
      this.userdata = this.user.message;
    })
  }

 

  LoginDataFun(){
    this.data.LoginUser(this.LoginDetails).subscribe((data: {})=>{
      console.log(data);
      this.login =data;
      this.loginuser = this.login.message;

      //condition to another Application.component.ts
      if(this.loginuser=="Logined Successfully"){
        this.router.navigate(['application']);
      }else{
        this.loginuser
        //console.log(this.loginuser);
      }
    })
  }
}
