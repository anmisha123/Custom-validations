import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrongPassword } from './shared/strongpassword.directive';
import { ConfirmEqualValidator } from './shared/confirmequalvalidator.directive';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { ValidateUserNameDirective } from './directives/validate-user-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    StrongPassword,
    ConfirmEqualValidator,
    ReactiveFormComponent,
    TemplateFormComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateUserNameDirective
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
