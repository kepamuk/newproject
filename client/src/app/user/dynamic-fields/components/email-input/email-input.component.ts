import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormGroup, Validators} from '@angular/forms';
import {ValidationErrors} from '../../../shared/validationErrors';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'email-input',
  template: `
    <mat-form-field class="example-full-width"
                    [formGroup]="group">
      <input matInput
             placeholder="{{config.placeholder}}"
             name="{{config.name}}"
             [formControlName]="config.name">
      <mat-error *ngIf="group.controls['email'].invalid">
        {{ getErrorMessage('email') }}
      </mat-error>
    </mat-form-field>
  `,
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent implements OnInit {

  config;
  group: FormGroup;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.group.controls['email'].setValidators([
      Validators.required,
      Validators.email
    ]);
    this.group.controls['email'].setAsyncValidators([
      this.checkDB.bind(this, 'email')
    ]);
  }

  getErrorMessage(control) {
    return ValidationErrors.getErrorMessage(control, this.group);
  }

  checkDB(type, control: AbstractControl) {
    return this.userService.checkDB(control.value, type)
      .map((res) => {
        return res['success'] ? null : {fieldTaken: true};
      });
  }
}
