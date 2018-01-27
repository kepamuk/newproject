import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public dialog: MatDialog) {
    this.dialog.open(LoginDialog);
  }

  openLogin() {

  }

}

@Component({
  selector: 'login',
  templateUrl: 'loginDialog.html',
})
export class LoginDialog {
}