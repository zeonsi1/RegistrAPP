import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: string = '';
  
  @ViewChild('button') button: ElementRef;

  constructor(private router: Router, private renderer: Renderer2) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state && state['user']) {
      this.user = state['user'];
    }
  }
  applyBounce() {
    this.renderer.addClass(this.button.nativeElement, 'bounce');
    setTimeout(() => {
      this.renderer.removeClass(this.button.nativeElement, 'bounce');
    }, 200);}
}