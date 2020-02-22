import { Component } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent {

  constructor() { }

  hide() {
    let form = document.getElementById('start');
    form.hidden = true;
    return false;
  }

}
