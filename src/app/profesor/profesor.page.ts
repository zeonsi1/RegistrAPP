import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../signin/auth.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {
  user: string = '';

  @ViewChild('button') button: ElementRef;

  constructor(private router: Router, private authService: AuthService, private renderer: Renderer2) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state && state['nombre']){
      this.user = state['nombre'];
    }
  }

  ngOnInit() {
  }

  applyBounce() {
    this.authService.logout();
    this.renderer.addClass(this.button.nativeElement, 'bounce');
    setTimeout(() => {
      this.renderer.removeClass(this.button.nativeElement, 'bounce');
    }, 200);
  }

}
