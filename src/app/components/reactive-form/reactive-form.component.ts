import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { emailDomainvalidator,forbiddenNamevalidator } from './../../shared/domain.validator';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  title = 'Reactive Form Validations';
  form! : FormGroup;
  emailPattern = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
  constructor (){}
  ngOnInit(): void {
    this.form = new FormGroup({
      fullname: new FormControl('',[Validators.required, Validators.maxLength(7),Validators.minLength(4),forbiddenNamevalidator]),
      username: new FormControl('',[Validators.required,forbiddenNamevalidator]),
      email: new FormControl('', [Validators.required,Validators.pattern(this.emailPattern),emailDomainvalidator]),
      password: new FormControl('',[Validators.required,]),
      confirmpassword: new FormControl('',[Validators.required])
    })
  }

  submit(){
    if(this.form.valid){
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');  
      console.table(this.form.value);  
      //this.form.reset();
    //   Object.keys(this.form.controls).forEach((key) => {
    //     const control = this.form.controls[key];
    //     control.setErrors(null);
    // });
    }
  }

  get email():any { return this.form.get('email'); }
  get fullname():any { return this.form.get('fullname'); }
  get username():any { return this.form.get('username'); }
  get password():any { return this.form.get('password'); }
  get confirmpassword():any { return this.form.get('confirmpassword'); }

}
