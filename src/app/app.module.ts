import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Pipes
import { UrlwidgetsafePipe } from './pipes/urlwidgetsafe.pipe';
import { UrlImagePipe } from './pipes/urlimage.pipe';
import { LengthNamePipe } from './pipes/lengthname.pipe';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    LoadingComponent,
    UrlwidgetsafePipe,
    UrlImagePipe,
    LengthNamePipe,
    CardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
