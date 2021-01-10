import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organigram',
  templateUrl: './organigram.component.html',
  styleUrls: ['./organigram.component.scss']
})
export class OrganigramComponent implements OnInit {
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
          title: 'CEO, Google Cloud',
        },
        {
          name: 'Susan Wojcicki',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: 'CEO, YouTube',
          
        },
        {
          name: 'Jeff Dean',
          cssClass: 'ngx-org-head',
          image: 'assets/node.svg',
          title: 'Head of Artificial Intelligence',
          childs: [
            {
              name: 'David Feinberg',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'CEO, Google Health',
              childs: []
            }
          ]
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
