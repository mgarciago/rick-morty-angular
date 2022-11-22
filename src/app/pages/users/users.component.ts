import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/users.interface';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';
import { comparePassword } from './validations/passwordValidator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public userForm!: FormGroup;
  public submitted: boolean = false;
  public newUser = this.userService.userData;
    constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {}
    ngOnInit(): void { 
      this.userService.clearUser();
      this.userForm = this.formBuilder.group({
        username: [this.newUser.username, [Validators.required, Validators.minLength(3)]],
        password: [this.newUser.password, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
        repassword: [this.newUser.repassword, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      }), {
        validators: comparePassword('password', 'repassword')
      }

      this.userForm.valueChanges.subscribe((changes) => {
        this.newUser = changes;
      })
    }
    public onSubmit() {
      this.submitted = true;
      if(this.userForm.valid) {
        const user: UserInterface = {
          username: this.userForm.get('username')?.value,
          password: this.userForm.get('password')?.value,
          repassword: this.userForm.get('repassword')?.value
        }
        this.userService.postUser(this.newUser).subscribe();
        Swal.fire('User generated correctly')

        this.userForm.reset();

        this.submitted = false;

        this.router.navigate(['/home'])
      }
    }
}
