import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablesComponent } from './pages/tables/tables.component';
import { HomeComponent } from './pages/home/home.component';
import { WorldmapComponent } from './pages/worldmap/worldmap.component';
import { NetworksComponent } from './pages/networks/networks.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'worldmap', component: WorldmapComponent },
  { path: 'networks', component: NetworksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
