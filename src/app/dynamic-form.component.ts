import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ControllerBase } from './Controllers/controller-base';
import { ControllerControlService } from './controller-control.service';
import { StringNumber } from './dynamic-form-constants';
import { IDynamicFormInput } from './dynamic-form-interfaces';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ ControllerControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() dynamicFormInput: IDynamicFormInput;
  @Output() formGroupEmitter = new EventEmitter<FormGroup>();
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: ControllerControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.dynamicFormInput.Controls);
    // this.qcs.setFormGroupValidators(this.form,this.dynamicFormInput.Controls);
    console.log(this.dynamicFormInput.Controls);
  }

  onSubmit() {
    this.dynamicFormInput.Submit();
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.formGroupEmitter.emit(this.form);
  }
  onCancel() {
    this.dynamicFormInput.Cancel();
  }
}
