import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var showStatic: any;

@Component({
  selector: 'app-organigram',
  templateUrl: './organigram.component.html',
  styleUrls: ['./organigram.component.scss']
})
export class OrganigramComponent implements OnInit, AfterViewInit {
  public nodes: any = [
    {
      name: 'Fabricio David Prado Gabriel',
      cssClass: 'ngx-org-ceo',
      image: 'assets/node.svg',
      title: 'Presidente',
      childs: [
        {
          name: 'Eduardo Paucarpura',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'Comité de Gestión',
          childs: [
            {
              name: 'Susan Wojcicki',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'Redes Sociales'              
            },
            {
              name: 'Susan Wojcicki',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'Página Web'              
            },
            {
              name: 'Susan Wojcicki',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'Edición'              
            },
            {
              name: 'Susan Wojcicki',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'Análisis'              
            }
          ]
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    showStatic();
  }

}
