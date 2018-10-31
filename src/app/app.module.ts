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

import {NgxPaginationModule} from 'ngx-pagination';
import { MusicComponent } from './music/music.component';
import { TorrentComponent } from './torrent/torrent.component';
import { GameComponent } from './game/game.component';
import { PaymentComponent } from './payment/payment.component';
import { ProgrammingComponent } from './programming/programming.component';
import { TravelComponent } from './travel/travel.component';
import { BankingComponent } from './banking/banking.component';
import { BasketballComponent } from './basketball/basketball.component';
import { ComputerComponent } from './computer/computer.component';
import { BusinessComponent } from './business/business.component';
import { InvestingComponent } from './investing/investing.component';
import { FitnesComponent } from './fitnes/fitnes.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'health', component: HealthComponent },
  { path : 'lifestyle', component: LifestyleComponent },
  { path : 'medicine', component: MedicineComponent },
  { path : 'movie', component: MovieComponent },
  { path : 'education', component: EducationComponent },
  { path : 'software', component: ComputersoftwareComponent },
  { path : 'music', component: MusicComponent },
  { path : 'torrent', component: TorrentComponent },
  { path : 'game', component: GameComponent },
  { path : 'payment', component: PaymentComponent },
  { path : 'programming', component: ProgrammingComponent },
  { path : 'travel', component: TravelComponent },
  { path : 'banking', component: BankingComponent },
  { path : 'basketball', component: BasketballComponent },
  { path : 'computer', component: ComputerComponent },
  { path : 'business', component: BusinessComponent },
  { path : 'investing', component: InvestingComponent },
  { path : 'fitnes', component: FitnesComponent }
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
    ComputersoftwareComponent,
    MusicComponent,
    TorrentComponent,
    GameComponent,
    PaymentComponent,
    ProgrammingComponent,
    TravelComponent,
    BankingComponent,
    BasketballComponent,
    ComputerComponent,
    BusinessComponent,
    InvestingComponent,
    FitnesComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
