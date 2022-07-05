import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Technique } from '../technique';
import { TechniquesDataService } from '../techniques-data.service';

@Component({
  selector: 'app-techniques-table',
  templateUrl: './techniques-table.component.html',
  styleUrls: ['./techniques-table.component.scss'],
})
export class TechniquesTableComponent implements OnInit {
  @Output() selectedTechniqueEvent = new EventEmitter<Technique>();

  page = 1;
  pageSize = 10;
  collectionSize = 0;
  techniques: Technique[] = [];
  selectedTechnique?: Technique;

  constructor(private techService: TechniquesDataService) {}

  getTechniques() {
    this.techService
      .getTechniques()
      .subscribe((techniques) => (this.techniques = techniques));
  }

  selectTechnique(technique: Technique) {
    this.selectedTechnique = technique;
    this.selectedTechniqueEvent.emit(technique);
  }

  ngOnInit(): void {
    this.getTechniques();
  }
}
