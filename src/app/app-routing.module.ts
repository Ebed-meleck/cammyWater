import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistributionComponent } from './distribution/distribution.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'distribution', component: DistributionComponent },
  { path: '', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
