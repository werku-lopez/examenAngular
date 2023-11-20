import { Component, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Cubos } from 'src/app/models/Cubos';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css'],
})
export class MarcasComponent implements OnInit {
  public cubos!: Array<Cubos>;
  public marca!: string;

  constructor(
    private _sevice: ServiceTienda,
    private _router: Router,
    private _activeRoutes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllCubosByMarca();
  }

  getAllCubosByMarca(): void {
    this._activeRoutes.params.subscribe((parametros: Params) => {
      this.marca = parametros['marca'];
    });

    this._sevice.getCubosByMarca(this.marca).then((result) => {
      this.cubos = result;
    });
  }
}
