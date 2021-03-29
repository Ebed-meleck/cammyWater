import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FourOhRouting } from './four-oh-four-routing.module';
import { FourOhFourComponent } from './four-oh-four.component';
@NgModule({
  declarations: [FourOhFourComponent],
  imports: [FourOhRouting, MatButtonModule],
})
export class FourOhModule {}
