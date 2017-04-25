import { RouterModule } from '@angular/router';
import { PanierService } from './service/panier.service';
import { RepositoryService } from './service/repository.service';
import { CatalogueModule } from './catalogue/catalogue.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CommunModule } from "./commun/commun.module";
import { StartByValidatorDirective } from './start-by-validator.directive';
import * as $ from 'jquery';
import { ApiRepositoryService } from "app/service/api-repository.service";

@NgModule({
  declarations: [
    AppComponent,
    StartByValidatorDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CatalogueModule,
    CommunModule,
    RouterModule
  ],
  providers: [
    PanierService,
    { provide: RepositoryService, useClass: ApiRepositoryService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
