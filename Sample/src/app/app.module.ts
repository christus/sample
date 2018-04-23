import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';  
import { HttpModule } from '@angular/http';




import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterService } from './register.service';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  exports: [ RouterModule ],
  providers: [ RegisterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
