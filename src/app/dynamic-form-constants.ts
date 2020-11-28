export declare type StringNumber = string | number;
export declare type StringNull = string | null;
export declare type NumberNull = number | null;
export type Value<T> = (Value: T) => T;


export enum Validations {
  REQUIRED = 'required',
  MIN = 'min',
  MAX = 'max',
  MINLENGTH = 'minLength',
  MAXLENGTH = 'maxLength',
  EMAIL = 'email',
  MOBILE = 'mobile',
  FLOAT = 'float',
  PATTERN = 'pattern',
  CUSTOMMSG = 'customMsg',
}

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
