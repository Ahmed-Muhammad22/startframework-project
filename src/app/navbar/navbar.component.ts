import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @HostListener('window:scroll')
  onWindowScroll() {
    const element = document.querySelector('.my-nav') as HTMLElement;
    if (window.scrollY > 0) {
      element.style.padding = '5px 0';
    } else {
      element.style.padding = '15px 0';
    }
  }
}
