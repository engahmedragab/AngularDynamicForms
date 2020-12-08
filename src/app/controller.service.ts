import { Injectable } from '@angular/core';

import { DropDownController } from './Controllers/controller-dropdown';
import { ControllerBase } from './Controllers/controller-base';
import { of } from 'rxjs';
import { TextBoxController } from './Controllers/controller-textbox/controller-textbox';
import { Controls, StringNumber, Validations } from './dynamic-form-constants';
import { RadioBottonController } from './Controllers/controller-radiobutton';
import { CheckBoxController } from './Controllers/controller-checkbox';
import { IControllerBase, Validator } from './dynamic-form-interfaces';
import { ValidatorFn, Validators } from '@angular/forms';

export default [
  DropDownController,
  TextBoxController,
  RadioBottonController,
  CheckBoxController,
];

@Injectable()
export class ControllerService {

  // getItems(controls) {
  //   return controls.map((control) => {
  //     const label = control.type;
  //     return {
  //       label,
  //       action: () => new label(), // Setting up a simple factory method for use when this item is selected in the list
  //     };
  //   });
  // }

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

  getControlType(type: string): Controls {
    if (type) {
      //return Controls[Object.keys(Controls).filter(key => key.toString().toUpperCase().includes(type.toUpperCase()))?.pop()];
      for (let item in Controls) {
        if (item.toString().toUpperCase().includes(type.toUpperCase())) {
          return Controls[item];
        } else if (type.toString().toUpperCase().includes(item.toUpperCase())) {
          return Controls[item];
        }
      }
    }
    return Controls.TEXTBOX;
  }
}
