import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  selectedIndex:number = 0;

  onSelectedItem(index:number){
    if(this.selectedIndex === index) {
      this.selectedIndex = 0
    }else {
      this.selectedIndex = index;
    }
  }
}
