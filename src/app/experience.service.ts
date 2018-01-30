import { Injectable } from '@angular/core';

import { Experience } from './experience';
import { GBESSETXP } from './gbesset.experiences';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ExperienceService {

  constructor() { }

   getExperiences(): Observable<Experience[]>{
  	return of(GBESSETXP);
  }

}
