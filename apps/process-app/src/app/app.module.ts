import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { ProcessLibModule } from '@my-company/process-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), ProcessLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
