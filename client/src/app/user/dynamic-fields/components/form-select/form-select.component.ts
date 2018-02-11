import {Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-select',
  template: `
    <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <select [formControlName]="config.name">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options">
          {{ option }}
        </option>
      </select>
    </div>
  `,
})
export class FormSelectComponent implements OnInit{
  config;
  group: FormGroup;
  
  ngOnInit(){
    // console.log(this.config);
    // console.log(this.group);
  }
}