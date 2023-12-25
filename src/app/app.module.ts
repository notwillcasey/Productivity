import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import {HttpClientModule} from "@angular/common/http";
// import { TaskFormComponent } from "./task-form/taskForm.component";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
