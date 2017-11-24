import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { GitsearchService} from './gitsearch.service';

import { AppComponent } from './app.component';
import { GitSearchComponent } from './git-search/git-search.component';


@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule

  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
