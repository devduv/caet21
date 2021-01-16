import { Conferencia } from './../../../model/conferencia';
import { Taller } from './../../../model/taller';
import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var showStatic: any;

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit, AfterViewInit {

  breakpoint: any;
  talleres: Taller[];
  conferencias: Conferencia[];

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 3;
  }

  ngAfterViewInit() {
    showStatic();
  }

  constructor() {
    this.initTalleres();
    this.initConferencias();
  }

  private initTalleres() {
    this.talleres = [
      { nombre: "Modelamiento de Procesos", source: "../assets/images/talleres/procesos.png", fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png" },
        { nombre: "Programación Web", source: "../assets/images/talleres/web.png" , fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png"},
      { nombre: "Base de Datos", source: "../assets/images/talleres/baseDatos.png" , fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png"},
      /* { nombre: "Inteligencia Artificial", source: "../assets/images/talleres/inteligenciaArtificial.png" , fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png"}, */
        /*{ nombre: "Blockchain", source: "../assets/images/talleres/blockchain.png" , fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png"},
       { nombre: "Seguridad de la Información", source: "../assets/images/talleres/seguridadInformacion.png" , fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png"} */
    ];
  }

  private initConferencias() {
    this.conferencias = [
      {
        nombre: "Robotica en el mercado laboral de los Próximos años", source: "../assets/images/abstract/abstract2.png", fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png", exponente: "Erik Antony Muñico Galvan",
        cargoExponente: "Jefe del Área de Robótica en UNMSM"
      }
    ];
  }
}
