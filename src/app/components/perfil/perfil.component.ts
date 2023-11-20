import { Component, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Router, Params, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public idUsuario!: number;
  public name!: string;
  public email!: string;

  constructor(
    private _service: ServiceTienda,
    private _actived: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._actived.params.subscribe((parametros: Params) => {
      this.idUsuario = parametros['idUsuario'];
      (this.name = parametros['nombre']), (this.email = parametros['email']);
    });
  }
}
