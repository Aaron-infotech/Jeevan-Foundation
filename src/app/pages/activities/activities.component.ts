import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { activities } from '../../data/site-data';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, RouterLink, PageBannerComponent, ScrollRevealDirective],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {
  activities = activities;
}
