import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES:any ={
  required:'Should not be empty',
  email:'Email is not valid',
  minlength: 'Field is too short',
  notMatch: 'Passwords does not match'
}
@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.css'
})
export class InputValidationComponent implements OnInit,OnChanges{
  @Input()
  abstractControl!:AbstractControl;
  @Input()
  showErrors: boolean = true;
  errorMessages: string[] = [];
  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    this.abstractControl.statusChanges.subscribe(()=>{
      this.checkValidation();
    });
    this.abstractControl.valueChanges.subscribe(() =>{
      this.checkValidation();
    })
  }

  checkValidation(){
    const errors = this.abstractControl.errors;
    if(!errors){
      this.errorMessages = [];
      return;
    }
    const errorKeys = Object.keys(errors);
    this.errorMessages = errorKeys.map(key => VALIDATORS_MESSAGES[key]);
  }

}

