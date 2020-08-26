import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent} from './login.component'

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(target: LoginComponent) {
    if(target.hasChanges()){
        return window.confirm('Quieres continuar sin guardar?');
    }
    return true;
  }
  
}
