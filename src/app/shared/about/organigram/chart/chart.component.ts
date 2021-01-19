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
          title: 'Comité de Gestión',
          childs: [
            {
              name: 'Cesar Raúl Cacho León',
              cssClass: 'ngx-org-child',
              title: 'Redes Sociales'              
            },
            {
              name: 'Duván Sáenz Falcon',
              cssClass: 'ngx-org-child',
              title: 'Página Web'              
            },
            {
              name: 'Juan Carlos Flores Pucho',
              cssClass: 'ngx-org-child',
              title: 'Edición'              
            },
            {
              name: 'Jose Antonio Aira Retuerto',
              cssClass: 'ngx-org-child',
              title: 'Análisis de Datos'              
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
