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
    {motivo:"debido a rotura"},
    {motivo:"por desbordamiento, debido a atasco"}
  ];
   conduccions: any[]=[
    {conduccion:"en conducción general"},
    {conduccion:"en conducción bajante"}
  ];

   eleAfectados: any[]=[
    {elemAfec:"al techo"},
    {elemAfec:"en los techos"},
    {elemAfec:"al paramento"},
    {elemAfec:"los paramentos"},
    {elemAfec:"al techo y paramento"},
    {elemAfec:"al techo y paramentos"}
  ];

  zonasAfectada: any[]=[

    {zonaAfectada:"del salón"},
    {zonaAfectada:"del pasillo"},
    {zonaAfectada:"del aseo"},
    {zonaAfectada:"del cuarto de baño"},
    {zonaAfectada:"de la cocina"}
  ]

coberturas: any[]=[

    {cobertura:"amparado"},
    {cobertura:"NO amparado"}
    
  ];

  qreparas: any[]=[

    {qrepara:"Asegurado"},
    {qrepara:"Asegurada"},
    {qrepara:"Servicio de asistencia"},
    {qrepara:"Perjudicado"},
    {qrepara:"Perjudicada"},
    
  ]
  continentes: any[]=[

    {continente:"continente"},
    {continente:"contenido"},
    {continente:"continente y contenido"}
   
    
  ];
  cubierto: boolean;
  cobertura = "";


  fraseConclusionAmparado =
     "Por tanto, a criterio de este perito los daños se consideran amparados por la garantía de daños por agua contratada en póliza que afecta al continente asegurado." ;

fraseConclusionNamparado =
    "Por tanto, a criterio de este perito los daños NO se consideran amparados por las garantías de esta póliza, al";
  


  checkoutForm;

  constructor(
    private datosService: DatosService,
    private formBuilder: FormBuilder,
    private router:Router) {

      this.checkoutForm = this.formBuilder.group({

      vivAfectadas: '',
      conduccion:'',
      motivo:'',
      atiende:'',
      anadeTexto:'',
      eleAfectados:'',
      expedientes:'',
      zonaAfectada:'',
      cobertura:'',
      rc:'',
      qrepara:'',
      continente:''
      

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
    if ( this.cubierto = true ){
      this.cobertura = this.fraseConclusionAmparado;
    }else {
      this.cobertura = this.fraseConclusionNamparado;
    }

    console.warn('Your order has been submitted', customerData);
    this.router.navigate(['presentacion',customerData]);
  }

}