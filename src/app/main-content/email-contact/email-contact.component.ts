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
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
  
  isMessageValid(): boolean {
    return this.contactData.message.trim().length > 0;
  }
 
  
  
  defaultImage = './assets/img/blanketCheck.webp';
  hoverImage = './assets/img/CheckDefaulthover.webp';

  currentImage = this.defaultImage;
  isCheckboxHovered = false;

  onMouseEnter() {
    this.currentImage = this.hoverImage;
    this.isCheckboxHovered = true;
  }

  onMouseLeave() {
    this.currentImage = this.defaultImage;
    this.isCheckboxHovered = false;
  }
}
