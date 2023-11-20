import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class ServiceTienda {
  constructor(private _http: HttpClient) {}

  getAllCubos(): Promise<any> {
    var request = 'api/cubos';
    var url = environment.apiTienda + request;
    let allcubosPromise = new Promise((resolve) => {
      this._http.get(url).subscribe((response) => {
        resolve(response);
      });
    });
    return allcubosPromise;
  }

  getAllMarcas(): Promise<any> {
    var request = 'api/cubos/marcas';
    var url = environment.apiTienda + request;
    let marcasPromise = new Promise((resolve) => {
      this._http.get(url).subscribe((response) => {
        resolve(response);
      });
    });
    return marcasPromise;
  }

  getCubosByMarca(marca: string): Promise<any> {
    var request = 'api/cubos/cubosmarca/' + marca;
    var url = environment.apiTienda + request;

    let cubosByMarcaPromise = new Promise((resolve) => {
      this._http.get(url).subscribe((response) => {
        resolve(response);
      });
    });
    return cubosByMarcaPromise;
  }

  getCuboAndComentarios(idCubo: number): Promise<any> {
    var request = 'api/comentariocubos/getcomentarioscubo/' + idCubo;
    var url = environment.apiTienda + request;

    let cuboAndComentarios = new Promise((resolve) => {
      this._http.get(url).subscribe((response) => {
        resolve(response);
      });
    });
    return cuboAndComentarios;
  }

  logIn(auth: User): Promise<any> {
    var dataJON = JSON.stringify(auth);
    var headers = new HttpHeaders().set('content-type', 'application/json');
    var request = 'api/manage/login';
    var url = environment.apiTienda + request;
    let loginUser = new Promise((resolve) => {
      this._http.post(url, dataJON, { headers }).subscribe((response) => {
        resolve(response);
      });
    });
    return loginUser;
  }

  signIn(auth: User): Promise<any> {
    var dataJON = JSON.stringify(auth);
    var headers = new HttpHeaders().set('content-type', 'application/json');
    var request = 'api/manage/registrousuario';
    var url = environment.apiTienda + request;
    let loginUser = new Promise((resolve) => {
      this._http.post(url, dataJON, { headers }).subscribe((response) => {
        resolve(response);
      });
    });
    return loginUser;
  }

  getSeguridad(token: string): Promise<any> {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    var request = '/api/Manage/PerfilUsuario';
    var url = environment.apiTienda + request;

    let seguridad = new Promise((resolve) => {
      this._http.get(url, config).subscribe((response) => {
        resolve(response);
      });
    });
    return seguridad;
  }

  getShopByUserId(token: string): Promise<any> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    var request = '/api/Compra/ComprasUsuario';
    var url = environment.apiTienda + request;
    
    let shopbyuserid = new Promise((resolve) => {
      this._http.get(url, { headers }).subscribe((response) => {
        resolve(response);
      });
    });
    return shopbyuserid;
  }
}
