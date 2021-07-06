import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LastMeasureComponent} from './last-measure/last-measure.component';
import {TopMeasureComponent} from './top-measure/top-measure.component';
import {TabMeasureComponent} from './tab-measure/tab-measure.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LastMeasureComponent,
    TopMeasureComponent,
    TabMeasureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LastMeasureComponent },
      { path: 'top', component: TopMeasureComponent },
      { path: 'tab', component: TabMeasureComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
