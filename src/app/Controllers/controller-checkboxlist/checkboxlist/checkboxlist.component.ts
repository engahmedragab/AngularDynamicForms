import { CheckBoxListController } from './../controller-checkboxlist';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkboxlist',
  templateUrl: './checkboxlist.component.html',
  styleUrls: ['./checkboxlist.component.css']
})
export class CheckboxlistComponent implements OnInit {
  @Input() controller: CheckBoxListController;
  @Input() form: FormGroup;
  internalFormGroup: FormGroup;
  constructor() {
   
   }

  ngOnInit(): void {
    const group: any = {};
    const values :number[] = this.controller.Value.call(0) || [];
    this.controller.options.forEach(controller => {
      group[controller.value] = new FormControl(values.includes(Number(controller.key)));
    });
    this.internalFormGroup = new FormGroup(group);
  }

  checkValue(event){
    let values :number[] = this.form.controls[this.controller.key].value || [];
    values = values.includes(Number(event.target.id)) ? ( event.target.checked ? values : values.filter(x => x != Number(event.target.id)) ) : ( event.target.checked ? [...values, Number(event.target.id)] : values)
    this.form.controls[this.controller.key].setValue(values);
    this.controller.Events.filter(x => x.name == 'change')[0]?.callable();
  }
}
