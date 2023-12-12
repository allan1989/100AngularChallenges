import { Component, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-top-of-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-of-page.component.html',
  styleUrl: './top-of-page.component.scss'
})
export class TopOfPageComponent {

  private targetYPosition = 200;
  public isVisible = false;

  constructor(private scroller: ViewportScroller) {}

  @HostListener('window:scroll', ['$event']) 
  onScroll() {
    let [_, YPosition] = this.scroller.getScrollPosition();
    this.isVisible = YPosition > this.targetYPosition;
  }

  scrollToTop() {
    this.scroller.scrollToPosition([0, 0])
  }
  
}
