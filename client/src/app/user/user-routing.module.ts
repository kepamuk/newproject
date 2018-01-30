import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {RegDialog} from './registration/registration.component';

const routes: Route[] = [
  {
    path: 'login',
    component: RegDialog,
    outlet: 'modal'
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
export class UserRoutingModule {
}