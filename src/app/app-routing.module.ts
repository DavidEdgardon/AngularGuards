import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component'
import { ProfileComponent} from './profile/profile.component'
import { ProfileGuard } from './profile/profile.guard';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent, canDeactivate: [LoginGuard] },
  {path: 'profile', component: ProfileComponent,canActivate: [ProfileGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
