import { Component, OnInit } from '@angular/core';
import { Technique } from '../technique';
import { TechniquesDataService } from '../techniques-data.service';

@Component({
  selector: 'app-techniques-table',
  templateUrl: './techniques-table.component.html',
  styleUrls: ['./techniques-table.component.scss'],
})
export class TechniquesTableComponent implements OnInit {
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  techniques: Technique[] = [];

  constructor(private techService: TechniquesDataService) {}

  getTechniques() {
    this.techService
      .getTechniques()
      .subscribe((techniques) => (this.techniques = techniques));
  }

  ngOnInit(): void {
    this.getTechniques();
  }
}
