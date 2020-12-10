import { DateTimeController } from './Controllers/controller-datetime/controller-datetime';
import { TextAreaController } from './Controllers/controller-textarea/controller-textarea';
import { ImageController } from './Controllers/controller-image/controller-image';
import { TimeController } from './Controllers/controller-time/controller-time';
import { DateController } from './Controllers/controller-date/controller-date';
import { FileController } from './Controllers/controller-file/controller-file';
import { BottonController } from './Controllers/controller-button/controller-button';
import { CheckBoxListController } from './Controllers/controller-checkboxlist/controller-checkboxlist';
import { Injectable } from '@angular/core';

import { DropDownController } from './Controllers/controller-dropdown/controller-dropdown';
import { ControllerBase } from './Controllers/controller-base';
import { TextBoxController } from './Controllers/controller-textbox/controller-textbox';
import { Validations } from './dynamic-form-constants';
import { RadioBottonController } from './Controllers/controller-radiobutton/controller-radiobutton';
import { CheckBoxController } from './Controllers/controller-checkbox/controller-checkbox';
import { IControllerBase, Validator } from './dynamic-form-interfaces';
import { ValidatorFn, Validators } from '@angular/forms';

export default [
  DropDownController,
  TextBoxController,
  RadioBottonController,
  CheckBoxController,
  CheckBoxListController,
  BottonController,
  FileController,
  DateController,
  TimeController,
  DateTimeController,
  ImageController,
  TextAreaController
];

@Injectable()
export class ControllerService {

  static CreateValidator(validation: Validator): ValidatorFn{
    switch (validation.validator) {
      case Validations.REQUIRED:
        return Validators.required;
        break;
      case Validations.EMAIL:
        return Validators.email;
        break;
      case Validations.REQUIRED:
        return Validators.required;
        break;
      case Validations.MAX:
        return Validators.max(validation.requiredValue);
        break;
      case Validations.MIN:
        return Validators.min(validation.requiredValue);
        break;
      case Validations.MINLENGTH:
        return Validators.minLength(validation.requiredValue);
        break;
      case Validations.MAXLENGTH:
        return Validators.maxLength(validation.requiredValue);
        break;
      case Validations.PATTERN:
        return Validators.pattern(validation.requiredValue);
        break;
      case Validations.CUSTOMVALIDATOR:
        return validation.customValidator;
        break;
    }
    return null;
  }

  getControlsClasses() {
    return IControllerBase.GetImplementations();
  }

  controlsClassesFactory(controls: IControllerBase[]) {
    return controls.map((control) => {
      const controlClass = IControllerBase.GetImplementations().filter(
        (x) => x.name === control.ControlType
      )[0];
      return new controlClass(control) as ControllerBase<any>;
    });
  }

}
