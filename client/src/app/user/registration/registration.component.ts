import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import 'rxjs/add/operator/map';
import {ValidationErrors} from '../validationErrors';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(public dialog: MatDialog) {
    // this.dialog.open(RegDialog);
  }

  openReg() {
    this.dialog.open(RegDialog, {
      width: '300px',
    });
  }

}

@Component({
  templateUrl: 'regDialog.html',
  styleUrls: ['./regDialog.css']
})
export class RegDialog {
  hide = true;
  hide1 = true;

  barLabel: string = "Password strength:";
  myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];

  form;

  constructor(public dialogRef: MatDialogRef<RegDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              fb: FormBuilder,
              private userService: UserService) {
    this.form = fb.group({
      username: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z0-9]+$')
        ],
        this.checkDB.bind(this, 'username')
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ],
        this.checkDB.bind(this, 'email')],
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
  }

  public checkCheckbox(c: AbstractControl) {
    if (c.value == false) {
      return 'false';
    } else return true;
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
    return ValidationErrors.getErrorMessage(control, this.form);
  }

  closeReg(): void {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.userService.regUser(form.value);
  }
}