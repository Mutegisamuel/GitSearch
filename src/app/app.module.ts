import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { GitsearchService} from './gitsearch.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GitSearchComponent } from './git-search/git-search.component';


@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
