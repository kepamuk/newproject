import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserComponent} from './user.component';
import {
  RegistrationComponent,
  RegDialog
} from './registration/registration.component';
import {MaterialModule} from '../../shared/mat.module';
import {ReactiveFormsModule} from '@angular/forms';
import {PasswordStrengthBarModule} from 'ng2-password-strength-bar';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {
  LoginComponent,
  LoginDialog
} from './login/login.component';
import {UserRoutingModule} from './user-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    RegistrationComponent,
    RegDialog,
    LoginComponent,
    LoginDialog
  ],
  entryComponents: [
    RegDialog,
    LoginDialog
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    PasswordStrengthBarModule,
    HttpClientModule,
    UserRoutingModule
  ],
  exports: [
    UserComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule {
}
