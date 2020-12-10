import { DatePipe } from '@angular/common';
import { DateController } from './../controller-date';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @Input() controller: DateController;
  @Input() form: FormGroup;
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.form.controls[this.controller.key]?.setValue(this.datePipe.transform(this.controller.Value.call(0),'yyyy-MM-dd'));
  }

}
