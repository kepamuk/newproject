import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {UsernameInputComponent} from '../username-input/username-input.component';
import {EmailInputComponent} from '../email-input/email-input.component';
import {FormSelectComponent} from '../form-select/form-select.component';
import {FormButtonComponent} from '../form-button/form-button.component';

const components = {
  button: FormButtonComponent,
  usernameInput: UsernameInputComponent,
  emailInput: EmailInputComponent,
  select: FormSelectComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  @Input() config;

  @Input() group: FormGroup;
  component;

  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef) {
  }

  ngOnInit() {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
