import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public nodes: any = [
    {
      name: 'Fabricio David Prado Gabriel',
      cssClass: 'ngx-org-first',
      title: 'Presidente',
      childs: [
        {
          cssClass: 'ngx-org-child',
          title: 'Áreas de interés',
          childs: [
            {
              name: 'Cesar Raúl Cacho León',
              cssClass: 'ngx-org-child',
              title: 'Área F. Redes Sociales'              
            },
            {
              name: 'Duván Sáenz Falcon',
              cssClass: 'ngx-org-child',
              title: 'Área F. Pagina Web'              
            },
            {
              name: 'Juan Carlos Flores Pucho',
              cssClass: 'ngx-org-child',
              title: 'Área F. de Edición'              
            },
            {
              name: 'Jose Antonio Aira Retuerto',
              cssClass: 'ngx-org-child',
              title: 'Área F. Análisis de Datos'              
            },
            {
              name: 'Nathaly Anett Alvarez Sivirichi',
              cssClass: 'ngx-org-child',
              title: 'Área F. de Actividades'              
            }
          ]
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
