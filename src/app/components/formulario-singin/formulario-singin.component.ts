import { Component, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/models/User';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-singin',
  templateUrl: './formulario-singin.component.html',
  styleUrls: ['./formulario-singin.component.css'],
})
export class FormularioSinginComponent {
  @ViewChild('email') email!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  public auth!: User;

  constructor(private _service: ServiceTienda, private _router: Router) {}
  signIn(): void {
    var email = this.email.nativeElement.value;
    var pass = this.password.nativeElement.value;

    this.auth = new User(email, pass);

    this._service.signIn(this.auth).then((result) => {
      console.log(result);
      this._router.navigate(['/']);
    });
  }
}
