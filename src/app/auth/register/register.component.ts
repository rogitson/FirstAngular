import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup

  constructor() {
    let password = new FormControl('', [Validators.required, Validators.minLength(8)])
    let passmatch = new FormControl('', [Validators.required, CustomValidators.equalTo(password)])
    let name = new FormControl('', [Validators.required])
    let email = new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
    let username = new FormControl('', [Validators.required, this.noWhitespaceValidator])

    this.form = new FormGroup({
      name: name,
      email: email,
      username: username,
      password: password,
      passmatch: passmatch
    })
  }

  ngOnInit(): void {
  }

  get formControls() {
    return this.form.controls
  }

  onSubmit(form: any) {
    alert("Success!")
  }

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').includes(" ");
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
