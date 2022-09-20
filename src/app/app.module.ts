import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { SharedModule } from "./_global/shared/shared.module";
import { SystemModule } from "./_global/system/system.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SystemModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
