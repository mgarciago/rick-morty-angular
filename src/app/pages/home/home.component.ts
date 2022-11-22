import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/users.interface';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public submitted = false;
  public userForm!: FormGroup;
  public userID = this.userService.userData.username;
  public newUser = this.userService.userData;
  public userList: UserInterface[]=[];
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((data: any) => {
      this.userList = data;
    });

    this.userForm = this.formBuilder.group({

      username: [this.newUser.username, [Validators.required, Validators.minLength(4)]],
      password: [this.newUser.password, [Validators.required, Validators.minLength(4)]],
    });

    this.userForm.valueChanges.subscribe((changes) => {
      this.newUser = changes;
    })
  }

  public onSubmit() {
    const result = this.userList.find((user) => user.username === this.newUser.username && user.password === this.newUser.password);
    
    if(result){
      this.submitted = true;
      this.router.navigate(['/home']);
    }else{
      this.userForm.reset();
      Swal.fire('User and password are incorrect')
    }
  }

}
