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
        image: './assets/images/abstract/abstract1.png',
        body: 'Somos una comunidad académica de profesores, estudiantes y personal administrativo' +
          'dedicado a la investigación científica y tecnológica. Formamos profesionales en Ingeniería de' +
          'Sistemas e Informática de alto nivel',
        title: 'Misión'
      },
      {
        image: './assets/images/abstract/abstract2.png',
        body: 'Ser comunidad académica de excelencia, culta y pioneraen la investigación científica y tecnológica.' +
          'Formamos profesionales de Sistemas e Informática',
        title: 'Visión'
      }
    ];
  }

}
