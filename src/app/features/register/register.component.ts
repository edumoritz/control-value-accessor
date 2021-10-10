import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { TypeAutocomplete } from '../../shared/components/autocomplete/autocomplete.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  stateAutoComplete = TypeAutocomplete.STATE;
  packageAutoComplete = TypeAutocomplete.PACKAGE;
  paymentAutoComplete = TypeAutocomplete.PAYMENT;

  form = new FormGroup({
    state: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    package: new FormControl('', Validators.required),
    payment: new FormControl('', Validators.required),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  submitRequest() {
    console.log(this.form.value);
  }
}
