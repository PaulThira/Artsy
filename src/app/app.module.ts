import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { EyeComponent } from './eye/eye.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { PricesComponent } from './prices/prices.component';
import { SocialsComponent } from './socials/socials.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    EyeComponent,
    HeaderComponent,
    RegistrationComponent,
    ArtworkComponent,
    PricesComponent,
    SocialsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
