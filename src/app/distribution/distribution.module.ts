import { NgModule } from '@angular/core';
import { DistributionRouting } from './distribution-routing.module';
import { DistributionComponent } from './distribution.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DistributionComponent],
  imports: [DistributionRouting, MatButtonModule],

  providers: [],
})
export class DistributionModule {}
