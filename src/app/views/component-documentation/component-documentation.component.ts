import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { RatingsComponent } from '../../components/ratings/ratings.component';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    RatingsComponent
  ],
  templateUrl: './component-documentation.component.html',
  styleUrl: './component-documentation.component.scss'
})
export class ComponentDocumentationComponent {

}
