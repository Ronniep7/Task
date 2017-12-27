import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { Routes,RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { ImdbComponent } from './imdb/imdb.component';
import {Ng2PaginationModule} from 'ng2-pagination';

const routes : Routes = [
  {path:'""Provider""',component : AppComponent},
  {path:'Imdb',component : ImdbComponent},
  {path:'Countries',component : CountriesComponent},
  {path:'Favorites',component : FavoritesComponent}, ]

@NgModule({
  declarations: [
    AppComponent,FavoritesComponent, CountriesComponent, ImdbComponent
  
  ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(routes),Ng2PaginationModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
