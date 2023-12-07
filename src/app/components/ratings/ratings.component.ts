import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss'
})
export class RatingsComponent  {
  @Input() rating!: number;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);
    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStars(): boolean {
    const highestRating = 5;
    const hasHalfStars = (this.rating - Math.floor(this.rating) >= 0.5) && this.rating !== highestRating;
    return hasHalfStars;
  }

  public get emptyStars(): number[] {
    const highestRating = 5;
    const totalEmptyStars = Math.floor(highestRating - this.rating);
    return Array(totalEmptyStars).fill(0);
  }

}
