import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';

import { ExperienceService} from './experience.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ExperienceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
