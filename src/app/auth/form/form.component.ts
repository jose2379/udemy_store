import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ErrorStateMatcher } from "@angular/material";
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";

export class FormErrorStatusMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null):boolean{
    const isSubmitted = form.submitted;
    return !!(control && control.invalid && (control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<any>();
  @Input() btnText: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new FormErrorStatusMatcher();

  constructor() { }

  ngOnInit() {
  }

  submit(email, password){
    this.onSubmit.emit({email, password});
  }

}
