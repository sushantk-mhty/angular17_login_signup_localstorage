import { Component, inject } from '@angular/core';
import { SignUp } from '../../models/classes/sign-up.model';
import { Login } from '../../models/classes/login.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isSignDivVisiable: boolean = true;

  signUpObj: SignUp = new SignUp();
  loginObj: Login = new Login();

  private router: Router = inject(Router);
  private userService: UserService = inject(UserService);

  onRegister() {
    debugger
    if (this.signUpObj.EmailId == '' && this.signUpObj.Password == '') {
      alert('Text should not be empty');
    } else{
      const localUser = localStorage.getItem('angular17users');
      if (localUser != null) {
        const users = JSON.parse(localUser);
        users.push(this.signUpObj);
        localStorage.setItem('angular17users', JSON.stringify(users));
      } else {
          const users = [];
          users.push(this.signUpObj);
          localStorage.setItem('angular17users', JSON.stringify(users));
      }
      alert('Registration Success');
      this.clearTempForm();
    }
  }
  clearTempForm() {
    this.signUpObj.name = '';
    this.signUpObj.EmailId = '';
    this.signUpObj.Password = '';
  }
  onLogin() {
    debugger
    const localUsers = localStorage.getItem('angular17users');
    if (localUsers != null) {
      const users = JSON.parse(localUsers); // convert to Array format
      const isUserPresent = users.find(
        (user: SignUp) =>
          user.EmailId == this.loginObj.EmailId &&
          user.Password == this.loginObj.Password
      );
      if (isUserPresent != undefined) {
        alert('User Found...');
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('No User Found');
      }
    }else{
      alert('Please sign up');
    }
  }
  // onLogin(){
  //   debugger;
  //   this.userService.onlogin(this.loginObj).subscribe((res:any)=>{
  //     debugger;
  //     if(res.result){
  //       localStorage.setItem('angular17tokenData',JSON.stringify(res.data));
  //       this.router.navigateByUrl('/dashboard');
  //     }else{
  //       alert(res.message);
  //     }
  //   },error=>{
  //     alert('wrong credential');
  //   })
  // }
}
