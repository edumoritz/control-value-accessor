import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = new FormGroup({
    name: new FormControl({ value: '' }),
    search: new FormControl({ value: '' }),
  });

  constructor() {}

  get search(): string {
    return this.form.value.search;
  }

  get isSearchTouched(): boolean {
    return this.form.controls['search'].touched;
  }

  onSubmit() {
    console.log(this.form.controls['name'].value);
    console.log(this.form.controls['search'].value);
  }
}
