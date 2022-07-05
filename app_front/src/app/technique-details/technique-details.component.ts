import { Component, Input, OnInit } from '@angular/core';
import { Technique } from '../technique';

@Component({
  selector: 'app-technique-details',
  templateUrl: './technique-details.component.html',
  styleUrls: ['./technique-details.component.scss'],
})
export class TechniqueDetailsComponent implements OnInit {
  @Input() technique?: Technique;

  constructor() {}

  ngOnInit(): void {}
}
