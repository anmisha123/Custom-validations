import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { isPasswordStrong } from "./domain.validator";
@Directive({
    selector:'[strongPassword]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:StrongPassword,
        multi:true
    }]
})

export class StrongPassword implements Validator {
    validate(control : AbstractControl): ValidationErrors | null{
        return isPasswordStrong()(control);
    }   
}