import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  loggedUser: any;
  private router:Router=inject(Router);
  constructor(){
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
  }
  onLogoff(){
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login')
  }
}
 