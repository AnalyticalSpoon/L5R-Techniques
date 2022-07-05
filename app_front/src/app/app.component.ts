import { Component } from '@angular/core';
import { Technique } from './technique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedTechnique?: Technique;

  selectTechnique(technique: Technique) {
    this.selectedTechnique = technique;
  }
}
