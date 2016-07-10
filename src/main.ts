import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideRouter, RouterConfig } from '@angular/router';
import { Ng2router3AppComponent, environment } from './app/';
import { LoginComponent } from './app/login/login.component';
import { LocationListComponent } from './app/location-list/location-list.component';
import { LocationDetailsComponent } from './app/location-details/location-details.component';
import { LocationTrainingsComponent } from './app/location-trainings/location-trainings.component';
import { TrainingDetailsComponent } from './app/training-details/training-details.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2router3AppComponent, provideRouter([
  { path: 'login', component: LoginComponent },
  { path: 'location', component: LocationListComponent, children: [
    { path: '', component: LocationDetailsComponent },
    { path: ':locId', component: LocationDetailsComponent },
    { path: ':locId/trainings', component: LocationTrainingsComponent },
    { path: ':locId/training/:trainingId', component: TrainingDetailsComponent }
    //{ path: 'training/:trainingId', component: TrainingDetailsComponent, outlet: 'aux' } //http://localhost:4200/location/2(aux:/training/2)
  ] },
]));

