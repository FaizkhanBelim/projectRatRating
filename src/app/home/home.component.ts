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
}
