import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormGroup, Validators} from '@angular/forms';
import {ValidationErrors} from '../../../shared/validationErrors';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'username-input',
  template: `
    <mat-form-field class="example-full-width"
                    [formGroup]="group">
      <input matInput
             placeholder="{{config.placeholder}}"
             name="{{config.name}}"
             [formControlName]="config.name">

      <mat-error *ngIf="group.controls['username'].invalid">
        {{ getErrorMessage('username') }}
      </mat-error>
    </mat-form-field>
  `,
  styleUrls: ['./username-input.component.css']
})
export class UsernameInputComponent implements OnInit {

  config;
  group: FormGroup;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.group.controls['username'].setValidators([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z0-9]+$')
    ]);
    this.group.controls['username'].setAsyncValidators([
      this.checkDB.bind(this, 'username')
    ]);
  }

  getErrorMessage(control) {
    return ValidationErrors.getErrorMessage(control, this.group);
  }

  checkDB(type, control: AbstractControl) {
    return this.userService.checkDB(control.value, type)
      .map((res) => {
        if (this.config.check === 'login') {
          return res['success'] ? {fieldIsset: true} : null;
        } else if (this.config.check === 'reg') {
          return res['success'] ? null : {fieldTaken: true};
        }
      });
  }
}
