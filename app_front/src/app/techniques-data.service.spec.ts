import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TechniquesDataService } from './techniques-data.service';
import { Technique } from './technique';

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

describe('TechniquesDataService', () => {
  let http: HttpTestingController;
  let techService: TechniquesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  beforeEach(() => {
    techService = TestBed.inject(TechniquesDataService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(techService).toBeTruthy();
  });

  it('returns expected techniques', () => {
    // call the service
    const expectedUrl: string = 'http://localhost:3000/api/techniques';
    let actualTechniques: Technique[] = [];
    techService
      .getTechniques()
      .subscribe((techniques) => (actualTechniques = techniques));

    // check that the underlying HTTP request was correct
    http
      .expectOne(expectedUrl)
      // return the fake response when we receive a request
      .flush(expectedTechniques);

    // check that the returned array is deserialized as expected
    expect(actualTechniques.length).toBe(2);
  });

  it('returns expected technique', () => {
    const expectedUrl: string =
      'http://localhost:3000/api/techniques/62c07b8e9480aafff6d286b8';
    let actualTechnique: Technique = expectedTechniques[1];
    techService
      .getTechniqueById('62c07b8e9480aafff6d286b8')
      .subscribe((technique) => (actualTechnique = technique));

    http.expectOne(expectedUrl).flush(expectedTechniques[1]);

    expect(actualTechnique).toEqual(expectedTechniques[1]);
  });

  it('returns empty array if error', () => {
    const expectedUrl: string = 'http://localhost:3000/api/techniques';
    let actualTechniques: Technique[] = [];
    techService
      .getTechniques()
      .subscribe((techniques) => (actualTechniques = techniques));

    http
      .expectOne(expectedUrl)
      .flush('', { status: 404, statusText: 'Not Found' });

    expect(actualTechniques).toEqual([]);
  });
});
