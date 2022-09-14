import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { HistorialesComponent } from './componentes/historiales/historiales.component';
import { ListaAlumnoComponent } from './componentes/lista-alumno/lista-alumno.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';
import { FormularioAlumnosComponent } from './componentes/formulario-alumnos/formulario-alumnos.component';
import { SeccionesComponent } from './componentes/secciones/secciones.component';
import { ListarSeccionComponent } from './componentes/listar-seccion/listar-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    HistorialesComponent,
    ListaAlumnoComponent,
    FormularioSeccionComponent,
    FormularioAlumnosComponent,
    SeccionesComponent,
    ListarSeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
