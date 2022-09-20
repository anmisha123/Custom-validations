import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailDomainvalidator(control:AbstractControl):{[key:string]:any}|null{
    const email:string =control.value;
    console.log(control)
    const domain =email.substring(email.lastIndexOf('@')+1);
    if(domain.toLowerCase()==="deloitte.com"){

        return null; 
    }
    else if(control.value==null){
        return({'emailDomainvalidator':false});
    }

    else{
        return({'emailDomainvalidator':true});
    }
}

export function forbiddenNamevalidator(control:AbstractControl):{[key:string]:any}|null{
    const forbidden=/admin/.test(control.value)
    return forbidden ?{'forbiddenName':{value:control.value}}:null;
}

export function MatchValidator(source: string, target: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);
      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    }
}
