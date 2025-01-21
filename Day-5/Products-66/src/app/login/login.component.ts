import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formValues = {
    emailName: '',
    Password: ''
  }

 

  handleFormSubmit(form: any) {
    if (form.valid) {
      console.log('Form is valid:', form.value);
      form.reset();
    } else {
      console.error('Form is invalid.');      
    }


  }

}
