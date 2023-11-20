import { Component, OnInit } from '@angular/core';
import { Cubos } from 'src/app/models/Cubos';
import { ServiceTienda } from 'src/app/services/service.tienda';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cubos!: Array<Cubos>;

  constructor(private _service: ServiceTienda) {}

  ngOnInit(): void {
    this._service.getAllCubos().then((result) => {
      this.cubos = result;
    });
  }
}
