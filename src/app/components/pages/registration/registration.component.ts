import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import{Router} from "@angular/router"
import{Title}  from'@angular/platform-browser'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
formdata:FormGroup;
errormessage='';
  constructor(private _router:Router,private _title:Title) {
    this._title.setTitle("Registration Form")
    this.formdata=new FormGroup({
      "firstname":new FormControl('',Validators.required),
      "lastname":new FormControl('',Validators.required),
      "gender":new FormControl('',Validators.required),
      "dob":new FormControl('',Validators.required),
      "mobile":new FormControl('',Validators.required),
      "email":new FormControl('',Validators.required),
      "password":new FormControl('',Validators.required),
      "confirmpassword":new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }
  submit(){
    //console.log(this.formdata.value)
    //let regist=this.formdata.value;
    //if(regist.firstname=="soni" && regist.lastname=="sharma" && regist.gender=="female" && regist.dob=="30-01-1998" && regist.mobile==8076615393 && regist.email=="sonijisharma1998@gmail.com" && regist.password=="soni2451" && regist.confirmpassword=="soni2451"){
     // this._router.navigate(["/dashboard"])
   // }
   // else{
   //this.errormessage="Invalid user!";
   this._router.navigate(["/sign-up"])
    }

  

}
