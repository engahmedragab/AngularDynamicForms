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
  PATTERN = 'Regex',
  CUSTOMVALIDATOR = 'custom',
}

export enum Controls {
  NUMBER = 'NumberController',
  TEXTBOX = 'TextBoxController',
  TEXTAREA = 'TextAreaController',
  DATETIME = 'DateTimeController',
  CHECKBOX = 'CheckBoxController',
  RADIOBUTTON = 'RadioBottonController',
  DROPDOWN = 'DropDownController',
  FILE = 'fileController',
  IMAGE = 'ImageController',
  BUTTON = 'BottonController',
  //   SELECTOPTION,
  //   TABLE,
  //   GRID
}

export enum EventTypes {
  CLICK = 'click',
  CHANGE = 'change',
  FOCUS = 'focus',
  BLUR = 'blur',
  FOCUSOUT = 'focusout',
  KEYUP = 'keyup',
  KEYDOWN = 'keydown',
  DBLCLICK = 'dblclick',
  MOUSEOVER = 'mouseover',
  SELECT = 'select',
}
