import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
// registerForm = FormGroup;
 
// constructor() {
//   this.registerForm = new FormGroup({
//     name: new FormControl('',Validators.required),
//     mail: new FormControl('',[Validators.required, Validators.email]),
//     userName: new FormControl('',[Validators.required, Validators.email]),
//     password: new FormControl('',[Validators.required, Validators.minLength(6)]),
//     confirmpassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
//   });
// }

// handleSubmitForm() {}


// registerForm: FormGroup;
// constructor(){
//    this.registerForm =new FormGroup({
//     name: new FormControl('', [Validators.required]),
//     email: new FormControl('', [Validators.required,Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
//     userName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
//     password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
//     confirmPassword: new FormControl('', [Validators.required]),

//   })
// }

// handleRegisterForm(){
//   console.log(this.registerForm)
//   this.registerForm.reset()
// }




registerForm: FormGroup;
constructor(){
  this.registerForm =new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    userName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
    password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  },{ validators: this.passwordMatchValidator })
}
passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { passwordMismatch: true };
  }
  return null;
};

handleRegisterForm(){
  console.log(this.registerForm)
  this.registerForm.reset()
}

}
