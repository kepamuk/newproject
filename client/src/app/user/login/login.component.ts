import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ValidationErrors} from '../shared/validationErrors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;

  form;

  config = [
    {
      type: 'usernameInput',
      name: 'username',
      placeholder: 'Username',
      check: 'login'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]]
    });

    this.config.forEach(control => {
      group.addControl(control.name, this.fb.control(''));
    });

    return group;
  }

  getErrorMessage(control) {
    return ValidationErrors.getErrorMessage(control, this.form);
  }

  onSubmit(form) {
    console.log(form);
    console.log(form.value);
    // this.userService.regUser(form.value);
  }

}