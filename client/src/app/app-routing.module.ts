import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';

const routes: Route[] = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: 'auth',
    component: UserComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}