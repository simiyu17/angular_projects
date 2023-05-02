import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(public auth: AuthService, public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('Is aunthenticated ====>' + this.auth.isAuthenticated());
        console.log('Is rout data ====>' + route);
        if (this.auth.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}