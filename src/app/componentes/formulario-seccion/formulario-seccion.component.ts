import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from './../../modelos/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent  {
@Output() public rescate = new EventEmitter<Seccion>();
  public seccion: Seccion = {
    idSeccion: 0,
    nombreSeccion: '',
  };

  public cambiarSeccion(evento: Event): void {
    const responsable = evento.target as HTMLInputElement;
    this.seccion.idSeccion = Number.parseInt(responsable.value);
  }

  public cambiarNomSeccion(evento: Event): void{
    const responsable = evento.target as HTMLInputElement;
    this.seccion.nombreSeccion = responsable.value;
  }
  public guardarSeccion(): void{
    const copia: Seccion = {... this.seccion}
    this.rescate.emit(copia);
    this.seccion.idSeccion= 0;
    this.seccion.nombreSeccion= '';
  }
}
