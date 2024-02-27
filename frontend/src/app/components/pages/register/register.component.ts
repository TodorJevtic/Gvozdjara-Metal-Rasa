import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InterfaceUserRegister } from '../../../interfaces/InterfaceUserRegister';
import { PasswordsValidator } from '../../../validators/password_match_validator';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  formRegister!:FormGroup;
  isSubmitted = false;
  backUrl = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(5)]]
    },{
      validators: PasswordsValidator('password','confirmPassword')
    });
  }
  get formControl() {
    return this.formRegister.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.formRegister.invalid) return;

    const fv= this.formRegister.value;
    const user :InterfaceUserRegister = {
      name: fv.name,
      email: fv.email,
      password: fv.password,
      confirmPassword: fv.confirmPassword,
      address: fv.address
    };

    this.userService.registration(user).subscribe(_ => {
      this.router.navigateByUrl(this.backUrl);
    })
  }

}
