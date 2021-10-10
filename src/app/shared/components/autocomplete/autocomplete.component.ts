import { Component, forwardRef, Input, Provider, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { databasePackage } from '../../../../assets/db-packages';
import { databasePayment } from '../../../../assets/db-payments';
import { databaseState } from '../../../../assets/db-state';
import { TypeAutocomplete } from './autocomplete.model';

const AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutocompleteComponent),
  multi: true,
};

@Component({
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR],
})
export class AutocompleteComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder: string = 'Digite aqui...';
  @Input() label: string = '';
  @Input() typeAutoComplete: TypeAutocomplete = TypeAutocomplete.STATE;

  control = new FormControl('');
  disabled = false;
  filteredOptions: Observable<string[]> = of([]);

  private onChange: Function = (value: string) => {};
  private onTouched: Function = () => {};

  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  writeValue(value: string): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabled(isDisabled: boolean) {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  onSelect(value: string) {
    this.onChange(value);
  }

  onFocus() {
    this.onTouched();
  }

  private _filter(value: string): string[] {
    switch (this.typeAutoComplete) {
      case 'STATE':
        return databaseState(value);
      case 'PACKAGE':
        return databasePackage(value);
      case 'PAYMENT':
        return databasePayment(value);
      default:
        return databaseState(value);
    }
  }
}
