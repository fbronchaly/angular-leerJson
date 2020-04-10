import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

parametros:any = {};

  constructor(private route: ActivatedRoute) {
   route.params.subscribe(params => {
     this.parametros = params;
       return this.parametros;
     //console.log (course.name);
    });
  }

  ngOnInit() {
  }
 




}