// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // This makes the service available throughout the app
})
export class SharedService {
  private randomValueSubject = new BehaviorSubject<string | undefined>(
    undefined
  );

  setRandomValue(value: string) {
    this.randomValueSubject.next(value);
  }

  getRandomValue$(): Observable<string | undefined> {
    return this.randomValueSubject.asObservable();
  }
}
