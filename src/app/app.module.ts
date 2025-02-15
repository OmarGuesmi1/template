import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterbackComponent } from './backoffice/footerback/footerback.component';
import { NavbarbackComponent } from './backoffice/navbarback/navbarback.component';
import { SidebarbackComponent } from './backoffice/sidebarback/sidebarback.component';
import { DashboardbackComponent } from './backoffice/dashboardback/dashboardback.component';
import { ChartsComponent } from './backoffice/charts/charts.component';
import { TableComponent } from './backoffice/table/table.component';
import { IconsComponent } from './backoffice/icons/icons.component';
import { NotfoundComponent } from './backoffice/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterbackComponent,
    NavbarbackComponent,
    SidebarbackComponent,
    DashboardbackComponent,
    ChartsComponent,
    TableComponent,
    IconsComponent,
    NotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
