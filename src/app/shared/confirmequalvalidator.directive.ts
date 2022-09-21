import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { MatchValidator } from "./domain.validator";
@Directive({
    selector:'[appConfirmEqualValidator]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:ConfirmEqualValidator,
        multi:true
    }]
})
export class ConfirmEqualValidator implements Validator {
    @Input() passwordField : any;
    validate(control : AbstractControl): ValidationErrors | null{
        return MatchValidator(this.passwordField)(control);
    }   
}