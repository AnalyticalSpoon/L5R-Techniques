import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Technique } from '../technique';
import { TechniquesDataService } from '../techniques-data.service';

import { TechniquesTableComponent } from './techniques-table.component';

const expectedTechniques: Technique[] = [
  {
    _id: '62c07b8e9480aafff6d286b7',
    name: "Assaut de l'eau courante",
    book: 'Base',
    type: 'Kata',
    category: 'Général',
    rank: 3,
    ring: 'Eau',
    activation:
      "Au prix d'une action d'Attaque et de Déplacement à l'aide d'une arme apprêtée, effectuez un **test d'Arts martiaux (Eau) ND 3** contre un personnage situé à portée 0-2, quelle que soit la portée maximale de l'arme.",
    effect:
      "En cas de réussite, la cible subit un nombre de points de dégâts physiques égal à la valeur de votre anneau d'Eau, ainsi que l'état En sang. Elle doit résister avec un **test de Forme (Terre 2, Feu 5) ND 4**. En cas d'échec, ajoutez les dégâts de base de l'arme aux dégâts infligés.",
    opportunity:
      "Ã **de l'Eau:** si vous souffrez de l'état Hébété, Désorienté, Immobilisé ou À terre, vous pouvez l'éliminer.",
  },
  {
    _id: '62c07b8e9480aafff6d286b8',
    name: 'Assaut des feuilles pourpres',
    book: 'Base',
    type: 'Kata',
    category: 'Général',
    rank: 3,
    ring: 'Terre',
    activation:
      "Au prix d'une action d'Attaque à l'aide d'une arme apprêtée, vous pouvez réaliser un **test d'Art martiaux (Terre) ND 4** contre un personnage situé à portée de celle-ci.",
    effect:
      "En cas de réussite, la cible subit un nombre de points de dégâts physiques égal à la valeur de votre anneau de Terre, plus 1 par succès bonus. Choisissez l'une des armes apprêtées de votre cible: cette dernière doit résister à l'aide d'un **test de Forme (Air 2, Eau 5) ND 4** pour ne pas perdre le contrôle de cette arme et la voir projetée à 3 niveaux de portée dans la direction de votre choix.",
    opportunity:
      'Ã **de la Terre:** si vous désarmez votre adversaire, vous pouvez prendre le contrôle de son arme plutôt que de la projeter au loin.',
  },
];

describe('TechniquesTableComponent', () => {
  let component: TechniquesTableComponent;
  let fixture: ComponentFixture<TechniquesTableComponent>;
  let techService: TechniquesDataService;
  let getTechniquesSpy: any;

  beforeEach(async () => {
    const techServiceSpy = jasmine.createSpyObj<TechniquesDataService>(
      'TechniquesDataService',
      ['getTechniques']
    );
    getTechniquesSpy = techServiceSpy.getTechniques.and.returnValue(
      of(expectedTechniques)
    );

    await TestBed.configureTestingModule({
      declarations: [TechniquesTableComponent],
      providers: [{ provide: TechniquesDataService, useValue: techServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechniquesTableComponent);
    component = fixture.componentInstance;
    techService = TestBed.inject(TechniquesDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fetches techniques', () => {
    expect(techService.getTechniques).toHaveBeenCalled();
    expect(component.techniques.length).toBe(2);
    expect(component.techniques).toEqual(expectedTechniques);
  });
});
