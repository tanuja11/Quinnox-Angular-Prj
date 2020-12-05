import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FlightscheduleComponent } from './flightschedule/flightschedule.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AdminflightComponent } from './adminflight/adminflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { AddflightComponent } from './addflight/addflight.component';
import { BookticketsComponent } from './booktickets/booktickets.component';
import { AllbookingsComponent } from './allbookings/allbookings.component';
import { AllusersComponent } from './allusers/allusers.component';
import { FilterPipe } from './filter.pipe';
import { FlightbookComponent } from './flightbook/flightbook.component';
import { FooterComponent } from './footer/footer.component';
import { UserSearchPipe } from './user-search.pipe';
import { BookDComponent } from './book-d/book-d.component';
import { TicketconfmComponent } from './ticketconfm/ticketconfm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    HeaderComponent,
    Header2Component,
    AboutusComponent,
    FlightscheduleComponent,
    ContactusComponent,
    HomeComponent,
    AdminflightComponent,
    UpdateflightComponent,
    AddflightComponent,
    BookticketsComponent,
    AllbookingsComponent,
    AllusersComponent,
    FilterPipe,
    FlightbookComponent,
    FooterComponent,
    UserSearchPipe,
    BookDComponent,
    TicketconfmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
