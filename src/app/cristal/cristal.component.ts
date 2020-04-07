import { Component, OnInit } from '@angular/core';
import {DatosService} from '../datos.service';

@Component({
  selector: 'app-cristal',
  templateUrl: './cristal.component.html',
  styleUrls: ['./cristal.component.css']
})
export class CristalComponent implements OnInit {
dato:any []=[];

  constructor(datosR:DatosService) { 
    this.dato = datosR.getDatos();
  }


  ngOnInit() {
  }

}