import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Contact } from '../model/contactUs.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public message: String = '';
  public contactForm = new FormGroup({
    name: new FormControl(),
    emailAdresse: new FormControl(),
    objet: new FormControl(),
    content: new FormControl(),
  });

  public lat: number = -4.4093392;
  public lng: number = 15.2552074;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initFrom();
  }

  initFrom() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      emailAdresse: ['', Validators.required, Validators.email],
      objet: ['', Validators.required],
      content: ['', Validators.required],
    });
  }
  onContact() {
    const contactForm = this.contactForm.value;
    const contact = new Contact(
      contactForm['name'],
      contactForm['emailAdresse'],
      contactForm['objet'],
      contactForm['content']
    );
    //add service backend on firebase
    this.contactForm.reset();
    this.message = 'Votre message est envoyer avec success';
    alert(this.message);
  }
}
