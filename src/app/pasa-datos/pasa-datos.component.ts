import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {DatosService} from '../datos.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-pasa-datos',
  templateUrl: './pasa-datos.component.html',
  styleUrls: ['./pasa-datos.component.css']
})
export class PasaDatosComponent implements OnInit {

  datos:any[]=[];

  motivos: any[]=[
    {motivo:"por rotura"},
    {motivo:"por desbordamiento, debido a atasco"}
  ];
   conduccions: any[]=[
    {conduccion:"en conducción general"},
    {conduccion:"en conducción bajante"}
  ];
  

  checkoutForm;

  constructor(
    private datosService: DatosService,
    private formBuilder: FormBuilder,
    private router:Router) {

      this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      conduccion:'',
      motivo:'',
      atiende:'',
      anadeTexto:''

    });

    }

  ngOnInit() {
   this.datos = this.datosService.getDatos();
  this.motivos =this.motivos;
  this.conduccions = this.conduccions;
  }

  onSubmit(customerData) {
    // Process checkout data here
    //this.datos = this.datosService.clearDatos();
    //this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
    this.router.navigate(['presentacion',customerData]);
  }

}