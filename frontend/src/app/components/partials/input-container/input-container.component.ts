import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css'
})
export class InputContainerComponent implements OnInit{

  @Input()
  inputLabel!:string;
  @Input()
  bgColor = 'white';
  constructor(){}
  ngOnInit(): void {
  }

}
