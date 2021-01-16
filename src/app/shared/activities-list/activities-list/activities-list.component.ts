import { Conferencia } from './../../../model/conferencia';
import { Taller } from './../../../model/taller';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit{

  talleres: Taller[];
  conferencias: Conferencia[];

  ngOnInit(){
  }

  constructor() {
    this.initTalleres();
    this.initConferencias();
  }

  private initTalleres() {
    this.talleres = [
      { nombre: "Modelamiento de Procesos", source: "../assets/images/talleres/procesos.png" , fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png"},
      { nombre: "Programación Web", source: "../assets/images/talleres/web.png" , fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png"},
      { nombre: "Base de Datos", source: "../assets/images/talleres/baseDatos.png" , fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png"},
      { nombre: "Inteligencia Artificial", source: "../assets/images/talleres/inteligenciaArtificial.png" , fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png"},
      { nombre: "Blockchain", source: "../assets/images/talleres/blockchain.png" , fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png"},
      { nombre: "Seguridad de la Información", source: "../assets/images/talleres/seguridadInformacion.png" , fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png"}
    ];
  }

  private initConferencias() {
    this.conferencias = [
      { nombre: "Robotica en el mercado laboral de los Próximos años", source: "../assets/images/talleres/procesos.png" , fecha: "15/01/2021", hora: "23:00", iconoHora: "../assets/images/talleres/hora.png", iconoFecha: "../assets/images/talleres/fecha.png", exponente: "Exponente: Erik Antony Muñico Galvan",
    cargoExponente: "Jefe del Área de Robótica en UNMSM"}
    ];
  }
}
