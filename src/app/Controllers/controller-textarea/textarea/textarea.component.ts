import { TextAreaController } from './../controller-textarea';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() controller: TextAreaController;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
