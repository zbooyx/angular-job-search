import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OffersComponent} from './offers/offers.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import {HomeComponent} from './home/home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {JobComponent} from './job/job.component';
import {FirstJobComponent} from './first-job/first-job.component';
import {EmployersProfileComponent} from './employers-profile/employers-profile.component';
import {CreateCVComponent} from './create-cv/create-cv.component';
import {AdvicesComponent} from './advices/advices.component';


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
    path: '**',
    component: HomeComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    HeaderComponent,
    HomeComponent,
    JobComponent,
    FirstJobComponent,
    EmployersProfileComponent,
    CreateCVComponent,
    AdvicesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
