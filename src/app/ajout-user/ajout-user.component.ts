import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { User } from '../Models/user.model';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.scss']
})
export class AjoutUserComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private route: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
this.userForm = this.formBuilder.group(
  {
    FirstName: ['',Validators.required],
    LastName: ['',Validators.required],
    email: ['',[Validators.required, Validators.email]],
    hobbies: this.formBuilder.array([])
  }
);
  }
  onSubmitForm() {
    const formValue = this.userForm.value;
    const user = new User(
      formValue['FirstName'],
      formValue['LastName'],
      formValue['email'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUSer(user);
    this.route.navigate(['/user']);
  }
getHobbies() {
  return this.userForm.get('hobbies') as FormArray;
}
onAddHobby() {
  const newHobby = this.formBuilder.control('', Validators.required);
  this.getHobbies().push(newHobby);
}
}
