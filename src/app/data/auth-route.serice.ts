//Application level services 
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataService} from './data.service';

@Injectable()
export class AuthRoute implements CanActivate {
  constructor(private router :Router, private dataService : DataService){
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.dataService.checkAlreadyLoggedIn()) return true;


    this.router.navigate(['/login'],{queryParams:{ returnUrl:state.url}})
    return false;
  }
} 