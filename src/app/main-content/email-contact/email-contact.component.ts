import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-email-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './email-contact.component.html',
  styleUrl: './email-contact.component.scss'
})
export class EmailContactComponent {

  http = inject(HttpClient);
  
  contactData = {
    name: "",
    email: "",
    message: ""
  }

   mailTest = true
   checkboxAccepted = false;
   showPrivacyWarning = false;


   post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

 onSubmit(ngForm: NgForm) {
  if (!this.checkboxAccepted) {
    this.showPrivacyWarning = true;
  }

  Object.values(ngForm.controls).forEach(control => {
    control.markAsTouched();
  });

  if (ngForm.invalid || !this.isMessageValid() || !this.checkboxAccepted) {
    return;
  }

  // Nachricht senden
  if (!this.mailTest) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: () => this.resetForm(ngForm),
        error: (error) => console.error(error),
        complete: () => console.info('send post complete'),
      });
  } else {
    this.resetForm(ngForm); // Test-Fall
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
