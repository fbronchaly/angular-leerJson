import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {DatosService} from '../datos.service';


@Component({
  selector: 'app-pasa-datos',
  templateUrl: './pasa-datos.component.html',
  styleUrls: ['./pasa-datos.component.css']
})
export class PasaDatosComponent implements OnInit {

  datos:any[]=[];

  constructor(
    datosService: DatosService,
    formBuilder: FormBuilder) {

    this.datos = datosService.getDatos();

   }

  ngOnInit() {
  }

}