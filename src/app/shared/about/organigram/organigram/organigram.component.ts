import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var showStatic: any;

@Component({
  selector: 'app-organigram',
  templateUrl: './organigram.component.html',
  styleUrls: ['./organigram.component.scss']
})
export class OrganigramComponent implements OnInit, AfterViewInit {


  public president: any = {
    name: 'Fabricio David Prado Gabriel',
    functions: [
      'Dirigir al equipo para cumplir los objetivos trazados.',
      'Supervisar las actividades de cada área de interés y de las áreas funcionales.',
      'Convocar a reuniones internas con las Áreas de interés y con cada área funcional.',
      ' Coordinar las ponencias, talleres o conferencias.',
      'Apoyar en todo lo necesario a los responsables y personal de apoyo de cada área de interés.'
    ]
  };

  public intersting_areas: any = [
    {
      name: 'Área de Desarrollo Web',
      responsable: 'Jean Franco Martínez Roncal',
      supports: [
        { name: 'Eisten Flores Sánchez' }
      ]
    },
    {
      name: 'Área de Desarrollo Móvil',
      responsable: 'Anyi Lesli Rodríguez Urbano',
      supports: [{ name: 'José Miguel Zea Guerrero' }]
    },
    {
      name: 'Área de Base de Datos',
      responsable: 'José Andrés Bernaola Cedano',
      supports: [{ name: 'Ninguno' }]
    },
    {
      name: 'Área de Inteligencia Artificial',
      responsable: 'Claudio Ampuero Ramos',
      supports: [{
        name: 'Alexander Antony Romero Bizarro'
      }]
    },
    {
      name: 'Área de Redes e Infraestructura',
      responsable: 'Ronald Jhon Castro Leiva',
      supports: [{
        name: 'Miguel Eduardo Velásquez Yzquierdo'
      }, {
        name: 'Danny Fabrizzio Chucos Sánchez'
      }]
    },
    {
      name: 'Área de Modelamiento de Procesos de Negocios',
      responsable: 'Enrique Miguel Chalco Vila',
      supports: [{
        name: 'Ninguno'
      }]
    },
    {
      name: 'Área de Calidad de Software',
      responsable: 'Vieri García Moreno',
      supports: [{
        name: 'Ninguno'
      }]
    },
    {
      name: 'Área de Seguridad informática',
      responsable: 'Diego Jesús Dávila Ortega',
      support: [{
        name: 'Arnold Ingunza Álvarez'
      }]
    },
    {
      name: 'Área de Ciencia de Datos',
      responsable: 'Francisco Aira Cespedes',
      supports: [{
        name: 'Juan Alexis Luque Ayala'
      }]
    },
    {
      name: 'Área de Inteligencia de Negocios',
      responsable: 'Fabrizio Carrasco Santisteban',
      supports: [{
        name: 'Sergio Bulnes Argote'
      },
      {
        name: 'José Antonio Aira Retuerto'
      }]
    },
    {
      name: 'Área de Negocios',
      responsable: 'Vicente Mori Rojas',
      supports: [{
        name: 'Ninguno'
      }]
    },
    {
      name: 'Área de Gerencia de Proyectos',
      responsable: 'Ángelo Jesús Davalos Salvado',
      supports: [{
        name: 'Sandra Silva Caruajulca'
      }]
    },
    {
      name: 'Área de Cloud',
      responsable: 'Arnold Ingunza Álvarez',
      supports: [{
        name: 'José La Rosa Menacho'
      }]
    },
    {
      name: 'Área de Gestión de TI',
      responsable: 'Luis Miguel Casas Moya',
      supports: [{
        name: 'Ninguno'
      }]
    },
    {
      name: 'Área de Blockchain',
      responsable: 'Josué Martínez Villa Garay',
      supports: [{ name: 'Elmer Chipana Quispe' }]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    showStatic();
  }

}
