import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import {AddpostComponent} from './components/addpost/addpost.component';
import {LogoutComponent} from '../app/components/logout/logout.component';
import {RouteGuardService} from './route-guard.service';
import {ErrorComponent} from './components/error/error.component';
import {ResourcesComponent} from './components/resources/resources.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"post",component:PostComponent,canActivate:[RouteGuardService]},
  {path:"singlepost",component:SinglepostComponent,canActivate:[RouteGuardService]},
  {path:"addpost",component:AddpostComponent,canActivate:[RouteGuardService]},
  {path:"logout",component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:"resource",component:ResourcesComponent,canActivate:[RouteGuardService]},


  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
