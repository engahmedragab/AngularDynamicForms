import { FormGroup, ValidatorFn , ValidationErrors, AbstractControlOptions } from '@angular/forms';
import { ControllerBase } from './Controllers/controller-base';
import { Controls, NumberNull, StringNull, StringNumber, Value } from './dynamic-form-constants';



export interface IDynamicFormInput {
    Id: StringNumber;
    Title: string;
    Class?: string[];
    ValidateForm?: boolean; // Default value
    gridColumnCount?: number;
    Controls: ControllerBase<any>[];
    Submit: () => void;
    Cancel?: () => void;
}

export interface IControllerBase {
    Value?: Value<any>;
    key?: StringNumber;
    Label?: string;
    Order?: number;
    ControlType?: Controls;
    Attr?: Attributes;
    GridLayout?: GridLayout | null;
    Validations?: Validator[] | [];
    Events?: ControlEvent;
    Options?: {key: StringNumber, value: StringNumber}[];
}

// tslint:disable-next-line: no-namespace
export namespace IControllerBase {
    type Constructor<T> = {
        new (...args: any[]): T;
        readonly prototype: T;
      };
    const implementations: Constructor<IControllerBase>[] = [];
    export function GetImplementations(): Constructor<IControllerBase>[] {
        return implementations;
      }
    export function register<T extends Constructor<IControllerBase>>(ctor: T) {
        implementations.push(ctor);
        return ctor;
      }
}

export interface IControllerBaseFactory {
    name: string;
    prams: any;
}

export interface GridLayout {
    startColumn: number;
    endColumn: number;
    startRow: number;
    endRow: number;
}

export interface Attributes {
    class?: StringNull;
    type?: StringNull;
    readonly?: boolean | false;
    placeholder?: string | '';
    display?: boolean | true;
    min?: NumberNull;
    max?: NumberNull;
    required?: boolean | true;
    hidden?: boolean | false;
}

export interface Validator {
    name: string | null;
    validationValue?: any | null;
    validator?: ValidatorFn | null;
    message?: string | null;
}

export interface ControlEvent {
    clickEvent?: () => any;
    changeEvent?: () => any;
    blurEvent?: () => any;
    selectEvent: () => any;
}

export interface EventValue {
    validateForm?: boolean | false;
    returnValue?: boolean | false;
    returnFormObject?: boolean | false;
    resetForm?: boolean | false;
    returnFieldObject?: boolean | false;
}
