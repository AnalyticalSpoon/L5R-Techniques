import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TechniquesTableComponent } from './techniques-table/techniques-table.component';
import { TechniqueDetailsComponent } from './technique-details/technique-details.component';
import { MarkdownStrongPipe } from './markdown-strong.pipe';
import { ChangeFontPipe } from './change-font.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TechniquesTableComponent,
    TechniqueDetailsComponent,
    MarkdownStrongPipe,
    ChangeFontPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
