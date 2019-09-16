import { Component, OnInit } from '@angular/core';
import * as NetlifyIdentityWidget from "netlify-identity-widget"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    NetlifyIdentityWidget.open()
  }

}
