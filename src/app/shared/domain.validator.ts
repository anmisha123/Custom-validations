import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailDomainvalidator(control:AbstractControl):{[key:string]:any}|null{
    const domain =control.value?.substring(control.value.lastIndexOf('@')+1);
    if(control.value === '' || domain?.toLowerCase()==="deloitte.com") return null; 
    else return({'emailDomainvalidator':true});
}

export function forbiddenNamevalidator(control:AbstractControl):{[key:string]:any}|null{
    const forbidden=/admin/.test(control.value)
    return forbidden ?{'forbiddenName':{value:control.value}}:null;
}


export function isPasswordStrong():ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const password= control.value;
        let hasNumber = /[0-9]{3}/.test(password);
        let hasUpper = /[A-Z]+/.test(password);
        let hasLower = /[a-z]{3}/.test(password);
        let hasSpecial = /[$@$!%*?&#]+/.test(password);
        const valid = hasNumber && hasUpper && hasLower && hasSpecial;
        if(password === '' || valid) return null;
        else return ({'passwordstrong' : true});
    }
}


export function MatchValidator(pasControl: any):ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const confirmPass = control.value;
      const password = pasControl.value;
      return confirmPass && password !== confirmPass
        ? { 'mismatch': true }
        : null;
    }
}
