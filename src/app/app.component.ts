import { Component } from '@angular/core';
import { Alumno } from './modelos/alumno';
import { Seccion } from './modelos/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba_1';
  public listaAlumno: Array<Alumno> = [

  ]
  public listarSeccion: Array<Seccion> =[

  ]

public nuevoAlumno(nuevo: Alumno): void {
  this.listaAlumno.push(nuevo);
}
public nuevaSec(nuevo: Seccion): void {
  this.listarSeccion.push(nuevo);
}
}
