import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  objUsuario = {
    email: '',
    pass1: '',
    pass2: '',
  }
  constructor(private _sAuth: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._sAuth.crearUsuario(
      this.objUsuario.email,
      this.objUsuario.pass1).subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      })
  }

}
