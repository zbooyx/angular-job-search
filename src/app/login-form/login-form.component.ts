import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    console.log(e)
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    if(username == 'admin' && password == 'admin')
  }


}
