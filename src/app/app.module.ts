import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { HeroComponent } from './Pages/hero/hero.component';
import { StoriesComponent } from './Pages/stories/stories.component';
import { StoriesLandingComponent } from './Pages/stories-landing/stories-landing.component';
import { WhoWeAreLandingComponent } from './Pages/who-we-are-landing/who-we-are-landing.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { WhyYouMustDonateComponent } from './Pages/home/why-you-must-donate/why-you-must-donate.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { GalleryModule, GALLERY_CONFIG } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeroComponent,
    StoriesComponent,
    StoriesLandingComponent,
    WhoWeAreLandingComponent,
    AboutUsComponent,
    FooterComponent,
    WhyYouMustDonateComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleryModule.withConfig({
      // slidingDirection: "horizontal",
      // imageSize: "cover",
      // thumbMode: "free",
      // thumbPosition: "bottom",
      // counterPosition: "top",
      // counter: true,
      // thumbWidth: 120,
      // nav: true,
      // thumb: true,
      // gestures: true,
      // thumbHeight: 80,
    }),
    LightboxModule
  ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
