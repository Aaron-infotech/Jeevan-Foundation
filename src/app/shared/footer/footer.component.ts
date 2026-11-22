import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../scroll-reveal.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', link: '/' },
    { label: 'Activities', link: '/activities' },
    { label: 'About Us', link: '/about-us' },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Contact', link: '/contact' },
    { label: 'Donate Now', link: '/donate' }
  ];

  involvementLinks = [
    { label: 'Volunteer With Us', link: 'mailto:jeevanfoundtrust2025@gmail.com?subject=Volunteer%20with%20Jeevan%20Foundation%20Trust' },
    { label: 'Support Our Mission', link: '/donate' },
    { label: 'Contact the Foundation', link: '/contact' }
  ];
}
