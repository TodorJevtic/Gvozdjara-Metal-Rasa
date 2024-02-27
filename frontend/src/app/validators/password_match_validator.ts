import { AbstractControl } from "@angular/forms"

export const PasswordsValidator = (passwordControlName: string,
    confirmPasswordControlName: string) => {
      const validator = (form: AbstractControl) => {
        const controlPassword =  form.get(passwordControlName);
        const controlPasswordConfirm =  form.get(confirmPasswordControlName);

        if(!controlPassword || !controlPasswordConfirm) return;

        if(controlPassword.value !== controlPasswordConfirm.value){
          controlPasswordConfirm.setErrors({notMatch: true});
        }else{
          const errors = controlPasswordConfirm.errors;
          if(!errors) return;

          delete errors.notMatch;
          controlPasswordConfirm.setErrors(errors);
        }
      }
      return validator;
    }
