import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';
import { ContactRouting } from './contact-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AlertComponent } from '../alert/alert.component';
@NgModule({
  declarations: [ContactComponent, AlertComponent],
  imports: [
    ContactRouting,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
  ],
  providers: [],
})
export class ContactModule {}
