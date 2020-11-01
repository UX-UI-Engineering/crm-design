import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionComponent } from './button/action/action.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { RightComponent } from './area/right/right.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    SidebarComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
