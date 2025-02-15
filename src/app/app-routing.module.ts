import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardbackComponent } from './backoffice/dashboardback/dashboardback.component';
import { ChartsComponent } from './backoffice/charts/charts.component';
import { TableComponent } from './backoffice/table/table.component';
import { IconsComponent } from './backoffice/icons/icons.component';
import { NotfoundComponent } from './backoffice/notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:DashboardbackComponent},
  {path:'charts',component:ChartsComponent},
  {path:'table',component:TableComponent},
  {path:'icons',component:IconsComponent},
  {path:'**',component:NotfoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
