import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {ValidationErrors} from '../validationErrors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public dialog: MatDialog) {
    // this.dialog.open(LoginDialog);
  }

  openLogin() {
    this.dialog.open(LoginDialog, {
      width: '300px',
    });
  }

}

@Component({
  selector: 'login',
  templateUrl: 'loginDialog.html',
  styleUrls: ['./loginDialog.css']
})
export class LoginDialog {
  hide = true;

  form;

  constructor(public dialogRef: MatDialogRef<LoginDialog>,
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
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]]
    });
  }

  checkDB(type, control: AbstractControl) {
    return this.userService.checkDB(control.value, type)
      .map((res) => {
        return res['success'] ? {fieldIsset: true} : null;
      });
  }

  getErrorMessage(control) {
    return ValidationErrors.getErrorMessage(control, this.form);
  }

  closeReg(): void {
    this.dialogRef.close();
  }

  onSubmit(form) {
    console.log(form);
    console.log(form.value);
    // this.userService.regUser(form.value);
  }
}