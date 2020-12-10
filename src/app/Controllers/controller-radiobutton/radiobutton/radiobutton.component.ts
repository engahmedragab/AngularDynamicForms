import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RadioBottonController } from '../controller-radiobutton';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {
  @Input() controller: RadioBottonController;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  change(event){
    this.controller.Events.filter(x => x.name == 'change')[0]?.callable();
  }

}
