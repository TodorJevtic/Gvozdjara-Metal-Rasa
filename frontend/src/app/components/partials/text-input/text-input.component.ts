import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit{
  @Input()
  abstractControl!:AbstractControl;
  @Input()
  showErrors:boolean = true;
  @Input()
  inputLabel!: string;
  @Input()
  type: 'text' | 'password' |'email' = 'text'

  get formControl(){
    return this.abstractControl as FormControl
  }
  constructor(){}

  ngOnInit(): void {
  }

}
