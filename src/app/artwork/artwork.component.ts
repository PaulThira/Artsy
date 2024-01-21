import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrl: './artwork.component.css',
  animations: [
    trigger('slideAnimation', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in-out')
      ]),
      transition('* => void', [
        animate('500ms ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class ArtworkComponent {
  slides: string[] = ['assets/Pictures/image1.png', 'assets/Pictures/image2.png', 'assets/Pictures/image3.png','assets/Pictures/image4.png','assets/Pictures/image5.png','assets/Pictures/image6.jpg', 'assets/Pictures/image7.jpg', 'assets/Pictures/image8.jpg','assets/Pictures/image9.jpg','assets/Pictures/image10.jpg']; // Replace with your image URLs
  currentSlideIndex: number = 0;

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Change the duration between slides as needed
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }
}
