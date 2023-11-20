import { Component, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Marcas } from 'src/app/models/Marcas';
import { Cubos } from 'src/app/models/Cubos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public marcas!: Array<Marcas>;
  public modelos!:Array<Cubos>;

  constructor(private _service: ServiceTienda) {}

  ngOnInit(): void {
    this.getAllMarcas();
    this.getAllModelos();
  }

  getAllModelos(): void{
    this._service.getAllCubos().then((resutl)=>{
      console.log(resutl);
      this.modelos = resutl;
    })
  }

  getAllMarcas(): void {
    this._service.getAllMarcas().then((resutl) => {
      this.marcas = resutl;
    });
  }
}
