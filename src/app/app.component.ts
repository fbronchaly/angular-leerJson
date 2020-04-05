import { Component } from '@angular/core';
import garantiaAgua from "./asses/json/agua.json";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

 constructor(private modalService: NgbModal) {}
 

  aguas:string[]= garantiaAgua;
}
