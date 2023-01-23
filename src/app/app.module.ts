import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';


import { HomeComponent } from './pages/home/home.component';
import { WorldmapComponent } from './pages/worldmap/worldmap.component';
import { TablesComponent } from './pages/tables/tables.component';
import { NetworksComponent } from './pages/networks/networks.component';

import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { NetworkComponent } from './components/network/network.component';
import { DataComponent } from './components/data/data.component';
import { HomepageComponent } from './components/homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    HomeComponent,
    WorldmapComponent,
    TablesComponent,
    NetworksComponent,
    NetworkComponent,
    DataComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
