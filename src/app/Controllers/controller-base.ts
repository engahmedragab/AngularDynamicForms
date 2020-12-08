import { ControllerHelperService } from '../controller-helper.service';
import { Controls, StringNull, StringNumber, Value } from '../dynamic-form-constants';
import { Attributes, ControlEvent, GridLayout, IControllerBase, Validator } from '../dynamic-form-interfaces';

export class ControllerBase<T> {
  Value: Value<T>;
  key: StringNumber;
  Label: StringNull;
  Order: number;
  ControlType: Controls;
  Attr?: Attributes;
  GridLayout?: GridLayout | null;
  Validations?: Validator[];
  Events?: ControlEvent[];
  options: {key: StringNumber, value: StringNumber}[];


  constructor(options: IControllerBase = {}
)
    {
      this.Value = options.Value;
      this.key = options.key || '';
      this.Label = options.Label || '';
      this.Order = options.Order === undefined ? 1 : options.Order;
      this.ControlType = ControllerHelperService.getControlType(options.ControlType);
      this.Attr = ControllerHelperService.clone<Attributes>({
        class : '',
        display : true,
        placeholder : '',
        readonly : false,
        type : '',
        hidden : false,
      }, this.Attr);
      this.GridLayout = options.GridLayout;
      this.Validations = options.Validations || [];
      this.Events = options.Events || [];
      this.options = options.Options || [];
  }
}
