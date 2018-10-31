import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const seconds = new Date().getSeconds();

    const result = seconds % 2 === 0;

    console.log(`Guard checked access: ${seconds} seconds passed, result is ${result}.`);

    return result;
  }
}
