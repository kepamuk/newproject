import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/map';

import {UserService} from '../service/user.service';
import {ValidationErrors} from '../shared/validationErrors';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  hide = true;
  hide1 = true;

  barLabel: string = "Password strength:";
  myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];

  form;

  config = [
    {
      type: 'usernameInput',
      name: 'username',
      placeholder: 'Username',
      check: 'reg'
    },
    {
      type: 'emailInput',
      name: 'email',
      placeholder: 'Email'
    }
  ];

  constructor(private userService: UserService,
              private fb: FormBuilder) {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]],
      checkbox: [false,
        this.checkCheckbox
      ],
      duplicate: ['', []]
    }, {validator: this.checkIfMatchingPasswords('password', 'duplicate')});

    this.config.forEach(control => {
      group.addControl(control.name, this.fb.control(''));
    });

    return group;
  }

  public checkCheckbox(c: AbstractControl) {
    if (c.value == false) {
      return 'false';
    } else return true;
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  getErrorMessage(control) {
    return ValidationErrors.getErrorMessage(control, this.form);
  }

  onSubmit(form) {
    this.userService.regUser(form.value);
  }

}