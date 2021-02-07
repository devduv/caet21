import { AfterViewInit, Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { HistoryService } from 'src/app/core/services/history.service';
declare var showStatic: any;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, AfterViewInit {

  public historyList: any;
  constructor(
    private historyService: HistoryService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    showStatic();
    this.getHistory();
  }

  async getHistory() {
    this.historyList = await this.historyService.getHistory();
  }
}
