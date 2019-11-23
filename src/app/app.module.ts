import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StudenComponent } from "./component/studen/studen.component";
import { TeachersComponent } from "./component/teachers/teachers.component";

@NgModule({
  declarations: [AppComponent, StudenComponent, TeachersComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
