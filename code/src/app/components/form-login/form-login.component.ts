import { Component } from '@angular/core';
import {query} from "@angular/animations";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent {

  constructor() { }

  click() {
    const but = document.getElementById('bouton');
    but.innerHTML = 'Click reussi!';
  }

}
