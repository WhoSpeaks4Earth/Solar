import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './headers/header/header.component';
import { DateComponent } from './headers/date/date.component';
import { WeatherComponent } from './headers/weather/weather.component';
import { SystemComponent } from './headers/system/system.component';
import { SystemDetailsComponent } from './system-details/system-details.component';
import { ProductionTodayComponent } from './production-today/production-today.component';
import { ProductionMeterComponent } from './production-meter/production-meter.component';
import { SubHeaderComponent } from './headers/sub-header/sub-header.component';

import { SolarService } from './providers/solar.service';
import { ProductionGraphComponent } from './graphs/production-graph/production-graph.component';

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
    SubHeaderComponent,
    ProductionGraphComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SolarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
