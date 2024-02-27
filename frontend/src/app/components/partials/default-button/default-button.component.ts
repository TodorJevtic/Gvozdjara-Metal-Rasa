import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-default',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css']
})
export class DefaultButtonComponent implements OnInit{
  @Input()
  class: 'submit' | 'button' = 'submit';
  @Input()
  content:string = 'Submit';
  @Input()
  bgroundColor = '#06A3DA'
  @Input()
  color = 'white';
  @Input()
  fontSize = 1.4;
  @Input()
  width = 13;
  @Output()
  onClick = new EventEmitter()
  constructor() {}

  ngOnInit(): void {
  }

}

