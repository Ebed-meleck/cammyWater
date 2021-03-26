import { NgModule } from '@angular/core';
import { AboutRouting } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [AboutRouting],
  providers: [],
})
export class AboutModule {}
