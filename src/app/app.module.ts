import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Rutas
import { APP_ROUTING } from './app.routes';
  

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AguaComponent } from './agua/agua.component';
import { ElectricosComponent } from './electricos/electricos.component';
import { HomeComponent } from './home/home.component';
import { CristalComponent } from './cristal/cristal.component';
import { DatosService } from './datos.service';
import { PasaDatosComponent } from './pasa-datos/pasa-datos.component';
import { PresentacionComponent } from './presentacion/presentacion.component';





@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, ReactiveFormsModule,APP_ROUTING],
  declarations: [ AppComponent, HelloComponent, AguaComponent, ElectricosComponent, HomeComponent, CristalComponent, PasaDatosComponent, PresentacionComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DatosService]
})
export class AppModule { }
