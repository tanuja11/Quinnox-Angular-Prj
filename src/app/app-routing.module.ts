import { TicketconfmComponent } from './ticketconfm/ticketconfm.component';
import { BookDComponent } from './book-d/book-d.component';
import { FlightbookComponent } from './flightbook/flightbook.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AllbookingsComponent } from './allbookings/allbookings.component';
import { BookticketsComponent } from './booktickets/booktickets.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { AddflightComponent } from './addflight/addflight.component';
import { AdminflightComponent } from './adminflight/adminflight.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { FlightscheduleComponent } from './flightschedule/flightschedule.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Header2Component } from './header2/header2.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {path:'',component:Header2Component },
  {path:'register',component : RegistrationComponent},
  {path:'login',component : LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'contactus',component:ContactusComponent},

  {path:'flightschedule',component:FlightscheduleComponent},

  {path:'home',component:HomeComponent},

  {path:'aboutus',component:AboutusComponent},

  {path:'adminflight',component:AdminflightComponent},

  {path:'addflight',component:AddflightComponent},

  {path:'updateflight/:fid',component:UpdateflightComponent},

  {path:'booktickets/:fid',component:BookticketsComponent},

  {path:'allbookings',component:AllbookingsComponent},

  {path:'allusers',component:AllusersComponent},

  {path:'flightbook',component:FlightbookComponent},

  {path:'book-d',component:BookDComponent},

  {path:'ticketconfm',component:TicketconfmComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
