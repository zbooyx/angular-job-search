import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdvicesComponent} from './advices/advices.component';
import {HomeComponent} from './home/home.component';
import {CreateCVComponent} from './create-cv/create-cv.component';
import {EmployersProfileComponent} from './employers-profile/employers-profile.component';
import {FirstJobComponent} from './first-job/first-job.component';
import {OffersComponent} from './offers/offers.component';

const appRoutes: Routes = [
  {
    path: 'advices',
    component: AdvicesComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {page: 'Home page'}
  },
  {
    path: 'createCV',
    component: CreateCVComponent,
  },
  {
    path: 'employersProfile',
    component: EmployersProfileComponent,
  },

  {
    path: 'firstJob',
    component: FirstJobComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'offers',
    component: OffersComponent,
  },

  {
    path: '**', redirectTo: 'home',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}



