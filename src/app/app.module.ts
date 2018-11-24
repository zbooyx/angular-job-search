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
import {AppRoutingModule} from './app-routing.module';
import {SearchComponent} from './offers/search/search.component';

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
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
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
