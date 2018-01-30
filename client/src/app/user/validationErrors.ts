export class ValidationErrors{

  public static getErrorMessage(control, form){
    if (control === 'username') {
      return form.controls['username'].hasError('required') ? 'You must enter a value' :
        form.controls['username'].hasError('pattern') ? 'Not a valid username' :
          form.controls['username'].hasError('minlength') ? `Required at least ${form.controls['username'].errors['minlength']['requiredLength']} characters. Actual length ${form.controls['username'].errors['minlength']['actualLength']}` :
            form.controls['username'].hasError('fieldTaken') ? 'This username already taken.' : form.controls['username'].hasError('fieldIsset') ? 'This username don\'t exist.' : '';
    } else if (control === 'email') {
      return form.controls['email'].hasError('required') ? 'You must enter a email' :
        form.controls['email'].hasError('email') ? 'Not a valid email' :
          form.controls['email'].hasError('fieldTaken') ? 'This email already taken.' : '';
    } else if (control === 'password') {
      return form.controls['password'].hasError('required') ? 'You must enter a password' : form.controls['password'].hasError('minlength') ? `Required at least ${form.controls['password'].errors['minlength']['requiredLength']} characters. Actual length ${form.controls['password'].errors['minlength']['actualLength']}` :
        '';
    } else if (control === 'duplicate') {
      return form.controls['duplicate'].hasError('notEquivalent') ? 'Passwords not match' : '';
    }
  }

}