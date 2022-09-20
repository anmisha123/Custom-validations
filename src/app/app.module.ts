import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TestComponent } from './test/test.component';
import { ConfirmEqualValidator } from './shared/confirmequalvalidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    //TestComponent
    ConfirmEqualValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
