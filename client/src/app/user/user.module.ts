import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PasswordStrengthBarModule} from 'ng2-password-strength-bar';

import {UserService} from './service/user.service';

import {MaterialModule} from '../../shared/mat.module';
import {UserRoutingModule} from './user-routing.module';

import {DynamicFormComponent} from './dynamic-fields/containers/dynamic-form/dynamic-form.component';
import {LoginComponent} from './login/login.component';
import {TestingComponent} from './dynamic-fields/testing/testing.component';
import {UserComponent} from './user.component';
import {RegistrationComponent} from './registration/registration.component';
import {UsernameInputComponent} from './dynamic-fields/components/username-input/username-input.component';
import {DynamicFieldDirective} from './dynamic-fields/components/dynamic-field/dynamic-field.directive';
import {FormSelectComponent} from './dynamic-fields/components/form-select/form-select.component';
import {FormButtonComponent} from './dynamic-fields/components/form-button/form-button.component';
import {EmailInputComponent} from './dynamic-fields/components/email-input/email-input.component';

@NgModule({
  declarations: [
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    DynamicFormComponent,
    TestingComponent,
    UsernameInputComponent,
    DynamicFieldDirective,
    FormSelectComponent,
    FormButtonComponent,
    EmailInputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    PasswordStrengthBarModule,
    HttpClientModule,
    UserRoutingModule,
    FormsModule
  ],
  exports: [
    UserComponent,
    DynamicFormComponent
  ],
  providers: [
    UserService
  ],
  entryComponents: [
    FormButtonComponent,
    UsernameInputComponent,
    FormSelectComponent,
    EmailInputComponent
  ]
})
export class UserModule {
}
