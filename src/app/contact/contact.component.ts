import { Input } from '@angular/core';
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
  success: string = '';
  hide: boolean = true;

  contactForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    emailAdress: ['', Validators.required],
    objet: ['', Validators.required],
    content: ['', Validators.required],
  });

  public lat: number = -4.4093392;
  public lng: number = 15.2552074;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initFrom();
  }

  initFrom() {
    return this.contactForm;
  }

  get getControl() {
    return this.contactForm.controls;
  }

  onContact() {
    const contactForm = this.contactForm.value;
    const contact = new Contact(
      contactForm['name'],
      contactForm['emailAdress'],
      contactForm['objet'],
      contactForm['content']
    );

    //add service backend on firebase

    this.hide = false;
    this.success = 'Merci de nous avoir contacter !';
    this.contactForm.reset();
  }
  _onHandler() {
    this.hide = true;
  }
}
