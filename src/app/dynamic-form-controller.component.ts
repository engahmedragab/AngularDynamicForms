import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Controls, Validations } from './dynamic-form-constants';
import { ControllerBase } from './Controllers/controller-base';

@Component({
  selector: 'app-controller',
  templateUrl: './dynamic-form-controller.component.html',
})
export class DynamicFormControllerComponent implements OnInit, AfterViewInit {
  @Input() controller: ControllerBase<any>;
  @Input() form: FormGroup;
  @ViewChild('elementRef') element;
  public Controls = Controls;
  constructor(){
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    if (this.element) {
      this.controller.Events.forEach(event =>
        this.element.nativeElement.querySelector('#' + this.controller.key)?.addEventListener(event.name, event.callable)
      );
    }
  }
  get isValid() {
    return this.form.controls[this.controller.key].valid;
  }

  get errors() {
    return Object.keys(this.form.controls[this.controller.key].errors);
  }

  errorMessage(error: any) {
    const validator = this.controller.Validations.filter(x => x.name.toUpperCase() == error.toUpperCase())[0];
    if (!validator) {
      return 'validation Error';
    }
    if (validator.message) {
      return validator.message;
    }
    switch (validator.validator) {
      case Validations.REQUIRED: return `${validator.name} is required!`; break;
      case Validations.PATTERN: return `${validator.name} has wrong pattern!`; break;
      case Validations.EMAIL: return `${validator.name} has wrong email format!`; break;
      case Validations.MAXLENGTH: case Validations.MINLENGTH: return `${validator.name} has wrong length! Required length: ${validator.requiredValue}`; break;
      default: return `${validator.name}: ${this.form.controls[this.controller.key].errors[validator.name]}`;
    }
    return 'validation Error';
  }
}
