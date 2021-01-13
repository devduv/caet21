import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Menu, MenuService } from 'src/app/core/services/menu.service';

declare var showStatic: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public abstractList: any[];
  constructor(
    private menuService: MenuService,
  ) {
    this.initAbstractList();
  }

  ngOnInit() {
    this.menuService.changeMenu(Menu.home);
  }
  ngAfterViewInit() {
    showStatic();
  }

  private initAbstractList() {
    this.abstractList = [
      {
        src: './assets/images/abstract/abstract1.png',
        title: 'Enseñanza de calidad',
        body: 'Como grupo estudiantil tenemos el fin de buscar resultados '
          + 'de aprendizaje ambiciosos de parte de los integrantes en cada taller impartido.',
          class: 'animate__static'
      },
      {
        src: './assets/images/abstract/abstract2.png',
        title: 'Contamos con profesionales',
        body: 'Tanto docentes, alumnos de último ciclo y egresados profesionales '
          + 'colaboran en esta comunidad compartiendo todo su conocimiento '
          + 'y experiencia.',
          class: ''
      },
      {
        src: './assets/images/abstract/abstract3.png',
        title: 'Talleres y Conferencias',
        body: 'Realizamos talleres semanales de acuerdo al Área de Interés '
          + ' por parte de los responsables del área, y conferencias que dictan nuestros docentes',
          class: ''
      }
    ];
  }

}
