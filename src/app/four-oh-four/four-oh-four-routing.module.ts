import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FourOhFourComponent } from './four-oh-four.component';

const routes = [
  {
    path: '',
    component: FourOhFourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FourOhRouting {}
