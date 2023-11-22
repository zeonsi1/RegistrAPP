import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../signin/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: string = '';
  id: number = 0;
  
  @ViewChild('button') button: ElementRef;

  constructor(private router: Router, private renderer: Renderer2, private authService: AuthService) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state && state['nombre']) {
      this.user = state['nombre'];
      this.id = state['id'];
    }
  }
  applyBounce() {
    this.authService.logout();
    this.renderer.addClass(this.button.nativeElement, 'bounce');
    setTimeout(() => {
      this.renderer.removeClass(this.button.nativeElement, 'bounce');
    }, 200);
  }

}