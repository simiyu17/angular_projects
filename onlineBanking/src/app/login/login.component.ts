import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userloginForm: FormGroup = this.fb.group({});
  invalidLogin = false;
  msg: string = "";
  constructor(private fb: FormBuilder, private us: UserService,private gs: GlobalService, private router: Router) { 
    this.createUserloginForm();
  }

  createUserloginForm(): void {
    this.userloginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onUserLoginSubmit() {
    this.us.userLogin(this.userloginForm.value).subscribe(data => {
      if (!data['success']) {
        this.invalidLogin = true;
        this.msg = data['msg'];
      } else {
        console.log(data);
        window.sessionStorage.setItem('access_token', data['authToken']);
        this.router.navigate(['home']);
      }
    }, error => {
      this.invalidLogin = true;
      this.msg = "Unable to login";
      if(error.error.message){
        this.msg = error.error.message;
      }
      console.log(this.msg);

    });
  }

  ngOnInit(): void {
   
  }

}
