import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  username: string = ''; 

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  
  goTo() {
    this.router.navigate(['/home'], {
      state: {user: this.username},
    })
  }
}
