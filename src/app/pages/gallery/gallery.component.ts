import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { galleryItems } from '../../data/site-data';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, PageBannerComponent, ScrollRevealDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  readonly allImages = galleryItems;
  readonly galleryCategories = ['All', 'Community Support', 'Child Welfare', 'Education', 'Flood Relief'];
  activeCategory = 'All';
  currentPage = 1;
  pageSize = 20;
  selectedImage: (typeof galleryItems)[number] | null = null;

  constructor() {
    this.updatePageSize();
  }

  @HostListener('window:resize')
  onResize(): void {
    const previousSize = this.pageSize;
    this.updatePageSize();
    const totalPages = this.getTotalPages();
    if (this.currentPage > totalPages) {
      this.currentPage = totalPages || 1;
    }
    if (previousSize !== this.pageSize && this.currentPage === 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedImage) {
      this.selectedImage = null;
    }
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight(): void {
    if (this.selectedImage) {
      this.navigateLightbox(1);
    }
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft(): void {
    if (this.selectedImage) {
      this.navigateLightbox(-1);
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.filteredImages.length / this.pageSize);
  }

  getSelectedImageIndex(): number {
    if (!this.selectedImage) {
      return -1;
    }
    return this.filteredImages.findIndex((item) => item.id === this.selectedImage!.id);
  }

  get filteredImages() {
    return this.activeCategory === 'All'
      ? this.allImages
      : this.allImages.filter((image) => image.category === this.activeCategory);
  }

  get visibleImages() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredImages.slice(start, start + this.pageSize);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, index) => index + 1);
  }

  updatePageSize(): void {
    this.pageSize = window.innerWidth < 640 ? 10 : 20;
  }

  changePage(page: number): void {
    if (page < 1 || page > this.getTotalPages()) {
      return;
    }
    this.currentPage = page;
    const galleryElement = document.getElementById('gallery-top');
    galleryElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  selectCategory(category: string): void {
    if (this.activeCategory === category) {
      return;
    }
    this.activeCategory = category;
    this.currentPage = 1;
    this.selectedImage = null;
  }

  openLightbox(image: (typeof galleryItems)[number]): void {
    this.selectedImage = image;
  }

  closeLightbox(): void {
    this.selectedImage = null;
  }

  onImageError(event: Event): void {
    const image = event.target;
    if (image instanceof HTMLImageElement && !image.src.endsWith('/assets/images/GroupPhoto1.jpeg')) {
      image.src = 'assets/images/GroupPhoto1.jpeg';
    }
  }

  showPrevious(): void {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  showNext(): void {
    if (this.currentPage < this.getTotalPages()) {
      this.changePage(this.currentPage + 1);
    }
  }

  navigateLightbox(direction: number): void {
    if (!this.selectedImage) {
      return;
    }
    const currentIndex = this.getSelectedImageIndex();
    const nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < this.filteredImages.length) {
      this.selectedImage = this.filteredImages[nextIndex];
    }
  }
}
