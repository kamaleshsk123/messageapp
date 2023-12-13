import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-joinroom',
  standalone: true,
  imports: [],
  templateUrl: './joinroom.component.html',
  styleUrl: './joinroom.component.css',
})
// export class JoinroomComponent {
//   constructor(private router: Router) {}
//   redirectToCreateId() {
//     this.router.navigate(['/createid']);
//   }
// }
export class JoinroomComponent {
  enteredValue: string = '';
  sharedValue$: Observable<string | undefined>;

  constructor(private router: Router, private sharedService: SharedService) {
    this.sharedValue$ = this.sharedService.getRandomValue$();
  }

  redirectToCreateId() {
    this.router.navigate(['/createid']);
  }

  onKey(event: Event): void {
    this.enteredValue = (event.target as HTMLInputElement).value;
  }

  redirectToChatRoom() {
    this.sharedValue$.subscribe((sharedValue) => {
      if (sharedValue && this.enteredValue === sharedValue) {
        this.router.navigate(['/chatroom']);
      } else {
        alert('Please enter the correct key value.');
      }
    });
  }
}
