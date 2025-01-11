import { Component } from '@angular/core';
interface Image {
  src: string;
  alt: string;
}
@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  enterImg: boolean = false;
  selectedPic: string = '';
  selectedAlt: string = '';
  images: Image[] = [
    { src: '/poert1.png', alt: 'Image 1' },
    { src: '/port2.png', alt: 'Image 2' },
    { src: '/port3.png', alt: 'Image 3' },
    { src: '/poert1.png', alt: 'Image 4' },
    { src: '/port2.png', alt: 'Image 5' },
    { src: '/port3.png', alt: 'Image 6' },
  ];
  openModal(image: Image): void {
    this.selectedPic = image.src;
    this.selectedAlt = image.alt;
    this.enterImg = true;
  }
  closeModel(): void {
    this.enterImg = false;
  }
  onImageClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
