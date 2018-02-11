import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {UserComponent} from './user.component';
import {LoginComponent} from './login/login.component';
import {TestingComponent} from './dynamic-fields/testing/testing.component';

const routes: Route[] = [
  {
    path: 'user', component: UserComponent,
    children: [
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'testing',
        component: TestingComponent
      }
    ]
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