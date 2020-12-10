import { ImageController } from './../controller-image';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() controller: ImageController;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
