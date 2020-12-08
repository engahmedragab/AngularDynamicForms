import { Injectable } from '@angular/core';


@Injectable()
export class ControllerHelperService {

  static clone<T>(source: T, distination: any): any {
    const cloneObj = distination || {};
    // tslint:disable-next-line: forin
    for (const attribut in source) {
      cloneObj[attribut] = cloneObj[attribut] || source[attribut];
    }
    return cloneObj;
  }

}
