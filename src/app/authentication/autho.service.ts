import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {
private Issignup=false
  constructor() { }
  Authentication(){this.Issignup=true}
  GetAuthenticate(){return this.Issignup}
}
