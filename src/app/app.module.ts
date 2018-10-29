import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { MedicineComponent } from './medicine/medicine.component';
import { MovieComponent } from './movie/movie.component';
import { EducationComponent } from './education/education.component';
import { ComputersoftwareComponent } from './computersoftware/computersoftware.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'health', component: HealthComponent },
  { path : 'lifestyle', component: LifestyleComponent },
  { path : 'medicine', component: MedicineComponent },
  { path : 'movie', component: MovieComponent },
  { path : 'education', component: EducationComponent },
  { path : 'software', component: ComputersoftwareComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    HomeComponent,
    LifestyleComponent,
    MedicineComponent,
    MovieComponent,
    EducationComponent,
    ComputersoftwareComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
