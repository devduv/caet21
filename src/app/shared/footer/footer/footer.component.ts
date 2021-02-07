import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/core/services/configuration.service';
declare var showStatic: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  configuration: any;
  constructor(
    private configurationService: ConfigurationService
  ) { }

  ngOnInit() {
    this.getConfiguration();
  }

  ngAfterViewInit() {
    showStatic();
  }


  async getConfiguration() {
    this.configuration = await this.configurationService.getConfiguration();
  }
}
