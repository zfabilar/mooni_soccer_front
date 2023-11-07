import { Component, OnInit } from '@angular/core';
import {LoginService} from '../core/services/login/login.service'
@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor(loginServ: LoginService) { }

  ngOnInit(): void {
  }

}
