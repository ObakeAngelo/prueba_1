import { Component, Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
import { Seccion } from 'src/app/modelos/seccion';
@Component({
  selector: 'app-formulario-alumnos',
  templateUrl: './formulario-alumnos.component.html',
  styleUrls: ['./formulario-alumnos.component.scss']
})
export class FormularioAlumnosComponent {
  @Output() public rescate = new EventEmitter<Alumno>();
  public alumno: Alumno = {
    rut: '',
    nombreAlumno: '',
    apellidoAlumno: '',
    edadAlumno: 0,
  };

  public cambiarRut(evento: Event): void {
    const responsable = evento.target as HTMLInputElement;
    this.alumno.rut = responsable.value;
  }
  public cambiarNombre(evento: Event): void {
    const responsable = evento.target as HTMLInputElement;
    this.alumno.nombreAlumno = responsable.value;
  }

  public cambiarApellido(evento: Event): void {
    const responsable = evento.target as HTMLInputElement;
    this.alumno.apellidoAlumno = responsable.value;
  }

  public cambiarEdad(evento: Event): void {
    const responsable = evento.target as HTMLInputElement;
    this.alumno.edadAlumno = Number.parseInt(responsable.value);
  }
  public guardarAlumno(): void{
    const copia: Alumno = {... this.alumno}
    this.rescate.emit(copia);
    this.alumno.rut = '';
    this.alumno.nombreAlumno = '';
    this.alumno.apellidoAlumno = '';
    this.alumno.edadAlumno = 0;


  }

}
