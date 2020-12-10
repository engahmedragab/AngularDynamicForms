import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ControllerBase } from './Controllers/controller-base';
import { ControllerControlService } from './controller-control.service';
import { StringNumber } from './dynamic-form-constants';
import { IDynamicFormInput } from './dynamic-form-interfaces';
import { ControllerService } from './controller.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ ControllerControlService , ControllerService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() dynamicFormInput: IDynamicFormInput;
  @Output() formGroupEmitter = new EventEmitter<FormGroup>();
  form: FormGroup;
  payLoad = '';
  controls: ControllerBase<any>[] = [];

  constructor(private qcs: ControllerControlService, private service: ControllerService) {
   }

  ngOnInit() {
    this.controls = this.service.controlsClassesFactory(this.dynamicFormInput.Controls);
    this.form = this.qcs.toFormGroup(this.controls);
    // this.qcs.setFormGroupValidators(this.form,this.dynamicFormInput.Controls);
    console.log(this.controls);
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
