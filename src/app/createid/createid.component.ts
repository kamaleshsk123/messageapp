import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createid',
  standalone: true,
  imports: [],
  templateUrl: './createid.component.html',
  styleUrl: './createid.component.css',
})
export class CreateidComponent {
  constructor(private router: Router) {}
  redirectToCreateRoom() {
    this.router.navigate(['/createroom']);
  }

  redirectToJoinRoom() {
    this.router.navigate(['/joinroom']);
  }
}
