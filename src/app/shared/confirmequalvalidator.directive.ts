import { Directive,Input } from "@angular/core";
import { AbstractControl, FormGroup, NG_VALIDATORS, Validator } from "@angular/forms";
@Directive({
    selector:'[appConfirmEqualValidator]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:ConfirmEqualValidator,
        multi:true
    }]

})
export class ConfirmEqualValidator implements Validator {
    @Input () appConfirmEqualValidator: string="";
    validate(control : AbstractControl): {[key:string]:any} | null{
        const controlToCompare = this.appConfirmEqualValidator;
        if(controlToCompare && controlToCompare !== control.value){
            return {'notEqual':true};
        }
        else{
            return null;
        }
    }
}