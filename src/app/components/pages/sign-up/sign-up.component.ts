import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import{Router} from '@angular/router'
import { AuthoService } from 'src/app/authentication/autho.service';
import{Title} from '@angular/platform-browser'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 formlogin:FormGroup;
 errormessage='';
 
  constructor(private _router:Router,private _authoService:AuthoService,private _title:Title) { 
    this._title.setTitle("Sign-up")
    this.formlogin=new FormGroup({
      "userid":new FormControl('',Validators.required),
      "password":new FormControl('',Validators.required)

    })
    
  }

  ngOnInit(): void {
  }
  submit(){
  console.log(this.formlogin.value)
  let sign=this.formlogin.value;
  if(sign.userid=="sonijisharma1998@gmail.com" && sign.password=="soni2451"){
    this._authoService.Authentication()
    this._router.navigate(["/dashboard"])
}
else{
  this.errormessage="Invalid userid or password!"
}
  }

}
