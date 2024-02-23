import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http: HttpClient = inject(HttpClient);

  onlogin(obj:any){
    return this.http.post("https://freeapi.gerasim.in/api/JWT/login",obj)
  }
}
