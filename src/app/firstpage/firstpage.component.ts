import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  standalone: true,
  imports: [],
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css',
})
export class FirstpageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('FirstpageComponent initialized');
    setTimeout(() => {
      console.log('Navigating to /createid');
      this.router.navigateByUrl('/createid', { skipLocationChange: true }); // Navigate without adding to browser history
    }, 1000);
  }
}
