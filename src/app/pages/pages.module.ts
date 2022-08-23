import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    RoomsComponent,
    ApartmentsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [HomeComponent, RoomsComponent, ApartmentsComponent, AboutComponent, ContactComponent]
})
export class PagesModule { }
