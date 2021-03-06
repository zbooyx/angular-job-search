import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OffersComponent} from './offers/offers.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {JobComponent} from './job/job.component';
import {FirstJobComponent} from './first-job/first-job.component';
import {EmployersProfileComponent} from './employers-profile/employers-profile.component';
import {CreateCVComponent} from './create-cv/create-cv.component';
import {AdvicesComponent} from './advices/advices.component';
import {AppRoutingModule} from './app-routing.module';
import {SearchComponent} from './offers/search/search.component';
import {FinderComponent} from './finder/finder.component';
import {PopularComponent} from './offers/popular/popular.component';
import {FilterComponent} from './offers/filter/filter.component';
import {RecomendedComponent} from './offers/recomended/recomended.component';
import {SingleOfferComponent} from './offers/recomended/single-offer/single-offer.component';
import {MaterialModule} from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {OffersService} from './offers/services/offers.service';

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
    SearchComponent,
    FinderComponent,
    PopularComponent,
    FilterComponent,
    RecomendedComponent,
    SingleOfferComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [OffersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
