import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "./serviceAuth/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate{
  constructor(private  authservice :AuthService , private  router : Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    const isAuthenticated =this.authservice.isAuthenticated() ;
    if (!isAuthenticated){
      this.router.navigate(["login"])
      return  false;
    }
    return true;
  }

}