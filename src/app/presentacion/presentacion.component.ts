import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {



  constructor(private route: ActivatedRoute) {
   route.params.subscribe(params => {
     // const course = params;
       this.heroe = this._heroesService.getHeroe( params['id'] );
       
     console.log (course.name);
    });
  }

  ngOnInit() {
  }




}