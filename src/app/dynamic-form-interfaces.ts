import { ValidatorFn } from '@angular/forms';
import { EventTypes, NumberNull, StringNull, StringNumber, Validations, Value } from './dynamic-form-constants';



export interface IDynamicFormInput {
    Id: StringNumber;
    Title: string;
    Class?: string[];
    ValidateForm?: boolean; // Default value
    gridColumnCount?: number;
    Controls: IControllerBase[];
    Submit: () => void;
    Cancel?: () => void;
}

export interface IControllerBase {
    Value?: Value<any>;
    key: StringNumber;
    Label: string;
    IsLabeled?: boolean;
    Order: number;
    ControlType?: string;
    Attr?: Attributes;
    GridLayout?: GridLayout | null;
    Validations?: Validator[] | [];
    Events?: ControlEvent[] | [];
    Options?: {key: StringNumber, value: any}[];
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
    hidden?: boolean | false;
}

export interface Validator {
    name: string | null;
    requiredValue?: any | null;
    validator?: Validations;
    customValidator?: ValidatorFn;
    message?: string | null;
}

export interface ControlEvent {
    name?: EventTypes;
    callable?: () => any;
}



export interface EventValue {
    validateForm?: boolean | false;
    returnValue?: boolean | false;
    returnFormObject?: boolean | false;
    resetForm?: boolean | false;
    returnFieldObject?: boolean | false;
}

