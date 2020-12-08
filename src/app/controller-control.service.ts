import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControllerService } from './controller.service';
import { ControllerBase } from './Controllers/controller-base';

@Injectable()
export class ControllerControlService {
  constructor() {
   }

  toFormGroup(controllers: ControllerBase<any>[] ) {
    const group: any = {};

    controllers.forEach(controller => {
      controller.Validations.forEach(Validation => Validation.name = Validation.name || Validation.validator );
      group[controller.key] = new FormControl(controller.Value?.call(0) || '');
      group[controller.key].setValidators(controller.Validations.map(( validator ) => ControllerService.CreateValidator(validator)));
    });
    return new FormGroup(group);
  }

  setFormGroupValidators(formGroup: FormGroup , controllers: ControllerBase<any>[] ){
    formGroup.setValidators(null);
    controllers.forEach(c =>
      formGroup.controls[c.key].setValidators(c.Validations.map((validator) => ControllerService.CreateValidator(validator)))
    );
    formGroup.updateValueAndValidity();
  }
}
