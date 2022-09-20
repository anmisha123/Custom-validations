import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { emailDomainvalidator,forbiddenNamevalidator,MatchValidator } from './shared/domain.validator';
//import { forbiddenNamevalidator } from './shared/user-name.validator';
import { User } from './user.model';
import {  ConfirmEqualValidator } from './shared/confirmequalvalidator.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formvalidation';
  formele!:User;
  form! : FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  

constructor (private formBuilder:FormBuilder){}
ngOnInit(): void {
  this.form=new FormGroup({
    fullname: new FormControl('',
      [Validators.required, Validators.maxLength(7),Validators.minLength(4),forbiddenNamevalidator]),
    username: new FormControl('',
       [Validators.required,forbiddenNamevalidator]),
    email: new FormControl('', 
      //[ Validators.required,Validators.pattern(this.emailPattern)]),
      [Validators.required,Validators.pattern(this.emailPattern),emailDomainvalidator]),
    password: new FormControl('',
      [Validators.required]),
    confirmpassword: new FormControl('',
        [Validators.required])
},
[MatchValidator('password', 'confirmpassword')]
)

}
// MatchValidator(source: string, target: string) {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const sourceCtrl = control.get(source);
//     const targetCtrl = control.get(target);
//     return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
//       ? { mismatch: true }
//       : null;
//   };
//}


submit(){
  this.form.reset();
  console.log(this.form);
 
}

get email():any{
  //console.log(this.formele.email)
 //this.form('email')}
  return this.form.get('email');
}
get fullname():any
{ 
  return this.form.get('fullname');
}
get username():any
{ 
  return this.form.get('username');
}
get password():any
{ 
  return this.form.get('password');
}
get confirmpassword():any
{ 
  return this.form.get('confirmpassword');
}
get passwordMatchError() : any
 {
  return (
    this.form.getError('mismatch') 
  // this.form.get('confirmpassword')?.touched
  );
}
}
