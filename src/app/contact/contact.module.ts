import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactRouting } from './contact-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ContactComponent],
  imports: [ContactRouting, FormsModule, ReactiveFormsModule, MatButtonModule],
  providers: [],
})
export class ContactModule {}
