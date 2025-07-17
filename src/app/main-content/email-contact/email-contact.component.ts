import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, HostBinding } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from './../../translation.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-email-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './email-contact.component.html',
  styleUrl: './email-contact.component.scss'
})
export class EmailContactComponent {
  constructor(public translation: TranslationService) {}
  @HostBinding('attr.id') id = 'email';
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  mailTest = false;
  checkboxAccepted = false;
  showPrivacyWarning = false;
  successMessageVisible = false;
  formTriedToSubmit = false;


  showSuccessMessage() {
    this.successMessageVisible = true;
    setTimeout(() => {
      this.successMessageVisible = false;
    }, 3000); 
  }

  post = {
    endPoint: 'https://pirasanth-shanmuganathan.de/sendMail.php',
    body: (payload: any) => payload,
    options: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  };

  isInputsValid(form: NgForm): boolean {
  return !!form?.valid && this.isMessageValid();
 }


  onSubmit(ngForm: NgForm) {
  this.formTriedToSubmit = true;
  if (!this.isFormReady(ngForm)) {
    Object.values(ngForm.controls).forEach(control => control.markAsTouched());
    if (!this.checkboxAccepted) {
      this.showPrivacyWarning = true;
    }

    return;
  }

  if (!this.mailTest) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: () => {
          this.resetForm(ngForm);
          this.showSuccessMessage();
        },
        error: (error) => console.error(error),
        complete: () => console.info('send post complete'),
      });
  } else {
    this.resetForm(ngForm);
    this.showSuccessMessage();
  }
}


  resetForm(form: NgForm) {
    form.resetForm();
    this.contactData = {
      name: '',
      email: '',
      message: ''
    };
    this.checkboxAccepted = false;
    this.showPrivacyWarning = false;
    this.currentImage = this.defaultImage;
  }

  isFormReady(form: NgForm): boolean {
    return !!form?.valid && this.isMessageValid() && !!this.checkboxAccepted;
  }

  isMessageValid(): boolean {
    return this.contactData.message.trim().length > 0;
  }

  defaultImage = './assets/img/blanketCheck.webp';
  hoverImage = './assets/img/Check.webp';

  currentImage = this.defaultImage;
  isCheckboxHovered = false;

  onMouseEnter() {
    if (!this.checkboxAccepted) {
      this.currentImage = this.hoverImage;
      this.isCheckboxHovered = true;
    }
  }

  onMouseLeave() {
    if (!this.checkboxAccepted) {
      this.currentImage = this.defaultImage;
      this.isCheckboxHovered = false;
    }
  }

  toggleCheckbox() {
    this.checkboxAccepted = !this.checkboxAccepted;
    this.showPrivacyWarning = false;
    this.currentImage = this.checkboxAccepted ? this.hoverImage : this.defaultImage;
  }
}
