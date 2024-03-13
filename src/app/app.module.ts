import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchPhotosComponent } from './fetch-photos/fetch-photos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FetchPhotosComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
