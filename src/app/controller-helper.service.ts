import { Injectable } from '@angular/core';
import { Controls } from './dynamic-form-constants';


@Injectable()
export class ControllerHelperService {

  static clone<T>(source: T, distination: any): any {
    const cloneObj = distination || {};
    for (const attribut in source) {
      cloneObj[attribut] = cloneObj[attribut] || source[attribut];
    }
    return cloneObj;
  }

  static getControlType(type: string): Controls {
    if (type) {
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
