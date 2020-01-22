import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateOfferComponent } from './components/create/createOffer.component';
import { GetAllComponent } from './components/get-all/get-all.component';
import { ConnestionService } from './services/connestion.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GetOneComponent } from './components/get-one/get-one.component';
import { UpdateComponent } from './components/update/update.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MessageService } from './services/message.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CreateOfferComponent,
    GetAllComponent,
    GetOneComponent,
    UpdateComponent,
    NavigateComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    ConnestionService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
