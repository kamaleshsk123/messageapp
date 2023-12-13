// redirect.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  private redirectFlag: boolean = false;

  setRedirectFlag(): void {
    this.redirectFlag = true;
  }

  getRedirectFlag(): boolean {
    return this.redirectFlag;
  }
}
