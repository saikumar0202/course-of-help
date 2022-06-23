import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { HeroComponent } from './Pages/hero/hero.component';
import { StoriesComponent } from './Pages/stories/stories.component';
import { StoriesLandingComponent } from './Pages/stories-landing/stories-landing.component';
import { WhoWeAreLandingComponent } from './Pages/who-we-are-landing/who-we-are-landing.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeroComponent,
    StoriesComponent,
    StoriesLandingComponent,
    WhoWeAreLandingComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
