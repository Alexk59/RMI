import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "./_global/shared/shared.module";
import { SystemModule } from "./_global/system/system.module";

import { AppComponent } from "./app.component";
import { TestingComponent } from "./testing/testing.component";
import { QaComponent } from "./qa/qa.component";
import { DefaultComponent } from "./default/default.component";
import { QaSubComponent } from "./qa-sub/qa-sub.component";

const routes: Routes = [
  { path: "qa", component: QaComponent },
  { path: "qa/sub", component: QaSubComponent },
  { path: "default", component: DefaultComponent },
  { path: "testing", component: TestingComponent },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
  },
  { path: "**", component: DefaultComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    QaComponent,
    DefaultComponent,
    QaSubComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SystemModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
