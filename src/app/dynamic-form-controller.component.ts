import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Controls } from './dynamic-form-constants';
import { ControllerBase } from './Controllers/controller-base';
import { StringNumber } from './dynamic-form-constants';

@Component({
  selector: 'app-controller',
  templateUrl: './dynamic-form-controller.component.html'
})
export class DynamicFormControllerComponent {
  @Input() controller: ControllerBase<any>;
  @Input() form: FormGroup;
  public Controls = Controls;
  get isValid() { return this.form.controls[this.controller.key].valid; }
}
