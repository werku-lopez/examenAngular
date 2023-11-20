import { Component, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/models/Usuarios';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css'],
})
export class SeguridadComponent implements OnInit {
  public key!: string;

  public auth!:Usuarios;

  constructor(
    private _service: ServiceTienda,
    private _active: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this._active.params.subscribe((parametros: Params) => {
      this.key = parametros['token'];
    });
    this._service.getSeguridad(this.key).then((result) => {
      this.auth = result;
    });
  }
}
