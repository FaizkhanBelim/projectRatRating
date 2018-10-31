import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  health() {
    this.router.navigate(['/health']);
  }
  lifestyle() {
    this.router.navigate(['/lifestyle']);
  }
  medicine() {
    this.router.navigate(['/medicine']);
  }
  movies() {
    this.router.navigate(['/movie']);
  }
  education() {
    this.router.navigate(['/education']);
  }
  software() {
    this.router.navigate(['/software']);
  }
  music() {
    this.router.navigate(['/music']);
  }
  torrent() {
    this.router.navigate(['/torrent']);
  }
  game() {
    this.router.navigate(['/game']);
  }
  payment() {
    this.router.navigate(['/payment']);
  }
  program() {
    this.router.navigate(['/programming']);
  }
  travel() {
    this.router.navigate(['/travel']);
  }
  bank() {
    this.router.navigate(['/banking']);
  }
  basket() {
    this.router.navigate(['/basketball']);
  }
  computer() {
    this.router.navigate(['/computer']);
  }
  business() {
    this.router.navigate(['/business']);
  }
  invest() {
    this.router.navigate(['/investing']);
  }
  fitnes() {
    this.router.navigate(['/fitnes']);
  }
}
