import { Component, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/models/User';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css'],
})
export class FormularioLoginComponent {
  public auth!: User;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  public token!:string;

  constructor(private _service: ServiceTienda, private _router: Router) {}
  login(): void {
    var email = this.email.nativeElement.value;
    var pass = this.password.nativeElement.value;

    this.auth = new User(email, pass);

    this._service.logIn(this.auth).then((result) => {
      console.log(result);
      this.token = result.response;
      console.log(this.token)
      this._router.navigate(['/seguridad', this.token]);
    });
  }
}
