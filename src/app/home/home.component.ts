import { Component, OnInit } from '@angular/core';

import { Experience} from '../experience';;
import { ExperienceService } from '../experience.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  experiences: Experience[];

  constructor(private _experienceService: ExperienceService) { }

  ngOnInit() {
  	this.getExperiences();
  }

  getExperiences(): void{
  	this._experienceService.getExperiences()
  							.subscribe( xps => this.experiences = xps);

  }

}
