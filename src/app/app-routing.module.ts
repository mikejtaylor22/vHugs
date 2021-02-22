import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import {AddpostComponent} from './components/addpost/addpost.component';
import {LogoutComponent} from '../app/components/logout/logout.component';
import {RouteGuardService} from './route-guard.service';
import {ErrorComponent} from './components/error/error.component';
import {ResourcesComponent} from './components/resources/resources.component';
import { UploadComponent } from './components/upload/upload.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"post",component:PostComponent,canActivate:[RouteGuardService]},
  {path:"singlepost",component:SinglepostComponent,canActivate:[RouteGuardService]},
  {path:"addpost",component:AddpostComponent,canActivate:[RouteGuardService]},
  {path:"logout",component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:"resource",component:ResourcesComponent,canActivate:[RouteGuardService]},
  {path:"upload",component:UploadComponent,canActivate:[RouteGuardService]},
  


  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
