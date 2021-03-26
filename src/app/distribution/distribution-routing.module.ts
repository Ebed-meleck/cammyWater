import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DistributionComponent } from './distribution.component';

const routes = [{ path: '', component: DistributionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistributionRouting {}
