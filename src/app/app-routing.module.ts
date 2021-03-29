import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DistributionComponent } from './distribution/distribution.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((H) => H.HomeModule),
  },

  {
    path: 'distribution',
    loadChildren: () =>
      import('./distribution/distribution.module').then(
        (D) => D.DistributionModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./about/about.module').then((A) => A.AboutModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./contact/contact.module').then((C) => C.ContactModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '**',
    loadChildren: () =>
      import('./four-oh-four/four-oh-four.module').then((F) => F.FourOhModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
