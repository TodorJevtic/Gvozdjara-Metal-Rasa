import { Component, OnInit} from '@angular/core';
import { User } from '../../../models/User';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  myFrom!: FormGroup;
  user!: User;

  constructor(private userService: UserService, private formBuilder: FormBuilder){
    this.user = this.userService.currentUser;
  }
  ngOnInit(): void {
    this.user = this.userService.currentUser;

    this.myFrom = this.formBuilder.group({
      name: [this.user.name, [Validators.required, Validators.minLength(3)]],
      email: [this.user.email, [Validators.required, Validators.email]],
      address: [this.user.address, [Validators.required, Validators.minLength(5)]]
    });
  }
  onSubmit(): void{

    if(this.myFrom.valid){
      const userId = this.user.id;
      const userData = this.myFrom.value;

      this.user.name = userData.name;
      this.user.email = userData.email;
      this.user.address = userData.address;
      this.userService.update(userId, this.user).subscribe(
        (user) =>{
        },
        (error) => {
        }
      );
    }else{
      console.log("neuspesna forma")
    }
  }

}
