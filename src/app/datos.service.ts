import { Injectable } from '@angular/core';
import agua from './asses/json/agua.json'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

datos: any []= agua;

  constructor() { }
  
pushDatos(param) {
    this.datos.push(param);
  }

  getDatos() {
    return this.datos;
  }

  clearDatos() {
    this.datos = [];
    return this.datos;
  }

}