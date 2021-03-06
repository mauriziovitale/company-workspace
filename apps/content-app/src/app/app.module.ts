import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { ContentLibModule } from '@my-company/content-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), ContentLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
