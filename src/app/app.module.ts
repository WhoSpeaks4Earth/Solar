import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DateComponent } from './date/date.component';
import { WeatherComponent } from './weather/weather.component';
import { SystemComponent } from './system/system.component';
import { SystemDetailsComponent } from './system-details/system-details.component';
import { ProductionTodayComponent } from './production-today/production-today.component';
import { ProductionMeterComponent } from './production-meter/production-meter.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';

import { SolarService } from './providers/solar.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DateComponent,
    WeatherComponent,
    SystemComponent,
    SystemDetailsComponent,
    ProductionTodayComponent,
    ProductionMeterComponent,
    SubHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SolarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
