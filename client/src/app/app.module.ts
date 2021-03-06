import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from '../shared/mat.module';
import {UserModule} from './user/user.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {TestingRComponent} from './testing-r/testing-r.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TestingRComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    UserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
