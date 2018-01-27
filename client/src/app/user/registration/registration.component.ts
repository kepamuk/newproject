import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(public dialog: MatDialog) {

  }

  openReg() {
    this.dialog.open(RegDialog);
  }

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'regDialog.html',
  styleUrls: ['./regDialog.css']
})
export class RegDialog {
  hide = true;
  hide1 = true;

  barLabel: string = "Password strength:";
  myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];

  form;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              fb: FormBuilder,
              private userService: UserService) {
    this.form = fb.group({
      username: ['stas1',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z0-9]+$')
        ],
        this.checkDB.bind(this, 'username')
      ],
      email: ['kepamuk1@yandex.ru',
        [
          Validators.required,
          Validators.email
        ],
        this.checkDB.bind(this, 'email')],
      password: ['123456',
        [
          Validators.required,
          Validators.minLength(6)
        ]],
      checkbox: [true,
        this.checkCheckbox
      ],
      duplicate: ['123456', []]
    }, {validator: this.checkIfMatchingPasswords('password', 'duplicate')});
  }

  public checkCheckbox(c: AbstractControl){
    console.log(c);
    console.log(c.value);
    if(c.value == false){
      return 'false';
    }else return true;
  }

  checkDB(type, control: AbstractControl) {
    return this.userService.checkDB(control.value, type)
      .map((res) => {
        return res['success'] ? null : {fieldTaken: true};
      });
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
    if (control === 'username') {
      return this.form.controls['username'].hasError('required') ? 'You must enter a value' :
        this.form.controls['username'].hasError('pattern') ? 'Not a valid username' :
          this.form.controls['username'].hasError('minlength') ? `Required length is at least ${this.form.controls['username'].errors['minlength']['requiredLength']} characters. Actual length ${this.form.controls['username'].errors['minlength']['actualLength']}` :
            this.form.controls['username'].hasError('fieldTaken') ? 'This username already taken.' : '';
    } else if (control === 'email') {
      return this.form.controls['email'].hasError('required') ? 'You must enter a email' :
        this.form.controls['email'].hasError('email') ? 'Not a valid email' :
          this.form.controls['email'].hasError('fieldTaken') ? 'This email already taken.' : '';
    } else if (control === 'password') {
      return this.form.controls['password'].hasError('required') ? 'You must enter a password' : this.form.controls['password'].hasError('minlength') ? `Required length is at least ${this.form.controls['password'].errors['minlength']['requiredLength']} characters. Actual length ${this.form.controls['password'].errors['minlength']['actualLength']}` :
        '';
    } else if (control === 'duplicate') {
      return this.form.controls['duplicate'].hasError('notEquivalent') ? 'Passwords not match' : '';
    }
  }

  onSubmit(form) {
    this.userService.regUser(form.value);
  }
}