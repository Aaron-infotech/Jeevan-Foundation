import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { values, trustees } from '../../data/site-data';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, PageBannerComponent, ScrollRevealDirective],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  values = values;
  trustees = trustees;
}
