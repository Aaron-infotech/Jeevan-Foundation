import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageBannerComponent } from '../../shared/page-banner/page-banner.component';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageBannerComponent, ScrollRevealDirective],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {
  donationForm: FormGroup;
  readonly quickAmounts = [100, 250, 500, 1000];
  readonly paymentGatewayConfigured = false;
  isSubmitting = false;
  formMessage = '';
  messageType: 'success' | 'error' | 'info' | null = null;

  constructor(private fb: FormBuilder) {
    this.donationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      amount: [null, [Validators.required, Validators.min(1)]],
      acknowledgement: [false, Validators.requiredTrue]
    });
  }

  get name() {
    return this.donationForm.get('name');
  }

  get amount() {
    return this.donationForm.get('amount');
  }

  setQuickAmount(value: number): void {
    this.donationForm.patchValue({ amount: value });
    this.donationForm.get('amount')?.markAsTouched();
  }

  onSubmit(): void {
    this.donationForm.markAllAsTouched();

    if (this.donationForm.invalid) {
      this.formMessage = 'Please correct the highlighted fields before continuing.';
      this.messageType = 'error';
      return;
    }

    if (!this.paymentGatewayConfigured) {
      this.formMessage = 'Live payment collection is not enabled in this demo. A secure payment provider and backend integration are required before accepting real donations.';
      this.messageType = 'info';
      return;
    }

    this.isSubmitting = true;
    this.formMessage = 'Processing your donation securely…';
    this.messageType = 'info';

    setTimeout(() => {
      this.isSubmitting = false;
      this.formMessage = 'Donation verification is complete. Thank you for supporting Jeevan Foundation Trust.';
      this.messageType = 'success';
      this.donationForm.reset({ acknowledgement: false });
    }, 1200);
  }
}
