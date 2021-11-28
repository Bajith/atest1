import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'Client';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    //const token = localStorage.getItem('token');
    const token = JSON.parse(localStorage.getItem('currentUser')!);
    this.accountService.loadCurrentUser(token);
  }
}
