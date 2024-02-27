import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin!:FormGroup;
  isSubmitted = false
  backUrl ='';
  constructor(private builderForm:FormBuilder, private serviceUser:UserService, private activatedRoute:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.formLogin = this.builderForm.group({
      email:['', [Validators.required,Validators.email]],
      password:['', Validators.required]
    });

    this.backUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }
  get formControl(){
    return this.formLogin.controls
  }
  submit(){
    this.isSubmitted = true;
    if(this.formLogin.invalid) return;

    this.serviceUser.login({email:this.formControl.email.value,
        password: this.formControl.password.value}).subscribe(()=>{
          this.router.navigateByUrl(this.backUrl);
        });
  }
}
