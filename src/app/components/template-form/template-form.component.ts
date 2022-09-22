import { Component} from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  userModal = new User();  
  emailPattern = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
  
  constructor() { }  

  // isEmailValid(event : Event){
  //   let email = (event.target as HTMLInputElement).value;
  //   const regex = new RegExp("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}");
  //   const isValid = regex.test(email);
  //   if(isValid) return null;
  //   else return {invalidEmail : true};
  // }
  
  onSubmit() {  
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');  
    console.table(this.userModal);  
  }  

}
