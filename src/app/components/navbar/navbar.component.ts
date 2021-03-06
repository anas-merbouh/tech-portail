import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/authentification/auth.service';

//
import { User } from '../../models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   //
   user: User;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    //
    this.authService.user.subscribe(user => {
      this.user = user;
    })
  }

}
