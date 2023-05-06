import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  userloginForm: FormGroup = this.fb.group({});
  invalidLogin = false;
  msg: string = "";
  @ViewChild('usernameRef') usernameElementRef: ElementRef = {} as ElementRef;
  constructor(private fb: FormBuilder, private us: UserService,private gs: GlobalService, private router: Router, private auth: AuthService) { 
    this.createUserloginForm();
  }

  ngAfterViewInit(): void {
      this.usernameElementRef.nativeElement.focus();
  }

  createUserloginForm(): void {
    this.userloginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onUserLoginSubmit(): void {
    this.us.userLogin(this.userloginForm.value).subscribe(data => {
      if (!data['success']) {
        this.invalidLogin = true;
        this.msg = data['msg'];
      } else {
        window.sessionStorage.setItem('auth_token', data['authToken']);
        window.sessionStorage.setItem('user_details', JSON.stringify(data['user']));
        this.auth.userRedirection();
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
    this.auth.userRedirection();
  }

}
