import { Component } from '@angular/core';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageBannerComponent, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {}
