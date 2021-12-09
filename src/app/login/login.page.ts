import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public postData = {
    email: '',
    password:''

  };
  //public email:any;
  //public password:any;
  
  constructor(private router: Router, private toastService: ToastService) {}
  ngOnInit() {
  }
  
  loginact(){
    if(this.postData.email=="admin@gmail.com" && this.postData.password=="admin"){
      this.router.navigate(['home']);
    }
    else{
      this.toastService.presentToast("Enter Correct username or Password");
    }
    
  }
  //loginact(email,password){
    //if(email=="admin@gmail.com" && password=="admin")
    //{
    //  this.router.navigate(['home']);
    //  console.log("Success")
  //  }
   // else{
   //   console.log("Fail",email,password)
   // }
 // }
}
