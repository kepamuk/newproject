import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  template: `
    <form
            class="dynamic-form"
            [formGroup]="form"
            (ngSubmit)="formSubmitted(form)">
      <ng-container
              *ngFor="let field of config;"
              dynamicField
              [config]="field"
              [group]="form">
      </ng-container>
      
      <div>
        <input type="text"
               formControlName="city">
      </div>
      
    </form>
  `,
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  config = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name'
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option'
    },
    {
      type: 'button',
      label: 'Submit',
      name: 'submit'
    },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({
      'city': new FormControl('')
    });
    this.config.forEach(control => {
      group.addControl(control.name, this.fb.control('', [Validators.required]));
      console.log(control);
    });
    return group;
  }

  formSubmitted(form) {
    console.log(form);
  }

}
