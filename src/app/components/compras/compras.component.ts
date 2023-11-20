import { Component, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Compra } from 'src/app/models/Compra';
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
})
export class ComprasComponent implements OnInit {
  public compras!: Array<Compra>;
  public idUsuario!: number;
  public key!: string;

  constructor(
    private _service: ServiceTienda,
    private _activedRouter: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activedRouter.params.subscribe((parametros: Params) => {
      this.idUsuario = parametros['idUsuario'];
      this.key = parametros['token'];
    });


    this._service.getShopByUserId(this.key).then((result) => {
      this.compras = result;
    });
  }
}
