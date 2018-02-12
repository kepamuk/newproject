import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {TestingRComponent} from './testing-r/testing-r.component';

const routes: Route[] = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: 'auth',
    component: UserComponent
  },
  {
    path: 'testing',
    component: TestingRComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}