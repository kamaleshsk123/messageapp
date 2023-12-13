import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-createroom',
  standalone: true,
  imports: [],
  templateUrl: './createroom.component.html',
  styleUrl: './createroom.component.css',
})
export class CreateroomComponent implements OnInit {
  randomValue: string | undefined;

  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit() {
    // Subscribe to the sharedValue$ observable to keep randomValue updated
    this.sharedService.getRandomValue$().subscribe((randomValue) => {
      this.randomValue = randomValue;
    });

    // Generate the initial random value
    this.generateRandomValue();
  }

  generateRandomValue() {
    const randomValue = Math.random().toString(36).substring(2, 8);
    this.sharedService.setRandomValue(randomValue);
  }

  updateRandomValue() {
    this.generateRandomValue();
  }

  redirectToCreateId() {
    this.router.navigate(['/createid']);
  }

  redirectToWaitingRoom() {
    this.router.navigate(['/waitingroom']);
  }
}
