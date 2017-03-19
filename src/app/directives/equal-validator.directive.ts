import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
    ]
})
export class EqualValidator implements Validator {
    constructor( @Attribute('validateEqual') public validateEqual: string,
        @Attribute('reverse') public reverse: string) {

    }

    private get isReverse() {
        if (!this.reverse) return false;
        return this.reverse === 'true' ? true: false;
    }

    validate(c: AbstractControl): { [key: string]: any } {
        let inputValue = c.value;

        let targetInput = c.root.get(this.validateEqual);

        if (targetInput && inputValue !== targetInput.value && !this.isReverse) {
          return {
            validateEqual: false
          }
        }

        if (targetInput && inputValue === targetInput.value && this.isReverse) {
            delete targetInput.errors['validateEqual'];
            if (!Object.keys(targetInput.errors).length) targetInput.setErrors(null);
        }

        if (targetInput && inputValue !== targetInput.value && this.isReverse) {
            targetInput.setErrors({
                validateEqual: false
            })
        }

        return null;
    }
}