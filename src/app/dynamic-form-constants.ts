import { ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export declare type StringNumber = string | number;
export declare type StringNull = string | null;
export declare type NumberNull = number | null;
export type Value<T> = (Value: T) => T;


export enum Validations {
  REQUIRED = 'Required',
  MIN = 'MinValue',
  MAX = 'MaxValue',
  MINLENGTH = 'MinLength',
  MAXLENGTH = 'MaxLength',
  EMAIL = 'email',
  MOBILE = 'mobile',
  FLOAT = 'float',
  PATTERN = 'Regex',
  CUSTOMVALIDATOR = 'custom',
}

// export const ValidatorsMap = new Map<string, ValidatorFn>([
//   [Validations.REQUIRED, Validators.required],
//   [Validations.EMAIL, Validators.email],
//   // [Validations.MAX, Validators.max],
//   // [Validations.MIN, Validators.min],
//   [Validations.MINLENGTH, Validators.minLength(5)],
//   // [Validations.MAXLENGTH, Validators.maxLength],
//   // [Validations.PATTERN, Validators.pattern],
// ]);

export enum Controls {
  NUMBER = 'NumberController',
  TEXTBOX = 'TextBoxController',
  TEXTAREA = 'TextAreaController',
  DATETIME = 'DateTimeController',
  CHECKBOX = 'CheckBoxController',
  RADIOBUTTON = 'RadioButtonController',
  DROPDOWN = 'DropDownController',
  FILE = 'fileController',
  IMAGE = 'ImageController',
  BUTTON = 'BottonController',
  //   SELECTOPTION,
  //   TABLE,
  //   GRID
}

export enum EventTypes {
  CLICKEVENT,
  CHANGEEVENT,
}
