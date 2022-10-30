import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TVMService } from '../services/TVM.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {

  constructor(
    private router: Router,
    private TVMService: TVMService) {

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token');

    if(!token) {
      return this.authentication();
    }

    return new Promise(async (res) => {
      const user = await this.TVMService.userInitialization();
      if (user)
        res(true);
      else
        res(this.authentication());
    })
  }

  naoAutenticado() {
    localStorage.clear();
    this.router.navigate(['/sign-in']);
    return false;
  }
}
