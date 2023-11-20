import { Component, OnInit } from '@angular/core';
import { Cubos } from 'src/app/models/Cubos';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ServiceTienda } from 'src/app/services/service.tienda';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  public cubo!: Cubos;
  public idCubo!: number;
  constructor(
    private _service: ServiceTienda,
    private _router: Router,
    private _activeRoutes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadCubo();
  }

  loadCubo(): void {
    this._activeRoutes.params.subscribe((parametros: Params) => {
      this.idCubo = parametros['idCubo'];
    });

    console.log(this.idCubo);

    this._service.getCuboAndComentarios(this.idCubo).then((result) => {
      //console.log(result);
      this.cubo = result;
    });
  }
}
