import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../scroll-reveal.directive';

@Component({
  selector: 'app-page-banner',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './page-banner.component.html',
  styleUrl: './page-banner.component.css'
})
export class PageBannerComponent {
  @Input() title = 'Page Title';
  @Input() description = '';
  @Input() image = 'assets/images/GroupPhoto2.jpeg';
}
