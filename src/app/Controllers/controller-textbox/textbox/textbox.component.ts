import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextBoxController } from '../controller-textbox';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  @Input() controller: TextBoxController;
  @Input() form : FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
