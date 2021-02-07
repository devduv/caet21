import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
declare var showStatic: any;
@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.scss']
})
export class PurposeComponent implements OnInit, AfterViewInit {

  public abstractList: any[];

  constructor() { }

  ngOnInit() {
    this.initAbstractList();
  }

  ngAfterViewInit() {
    showStatic();
  }

  private initAbstractList() {
    this.abstractList = [
      {
        image: './assets/images/purpose/mision.jpg',
        body: 'Somos una Comunidad Estudiantil de Tecnología que busca fortalecer el desarrollo académico, social y profesional del estudiante compartiendo   conocimiento , experiencia estudiantil o laboral y ayuda entre la misma comunidad, para ello se realiza distintas actividades extracurriculares , con el apoyo de profesionales, profesores y estudiantes.',
        title: 'Misión'
      },
      {
        image: './assets/images/purpose/vision.png',
        body: 'Ser una Comunidad tecnológica reconocida a nivel nacional , por generar proyectos de alto impacto para el desarrollo económico, social y ambiental de la sociedad .Asegurar la participación de los estudiantes de todos los grados en los proyectos relacionados a su especialización.',
        title: 'Visión'
      }
    ];
  }

}
