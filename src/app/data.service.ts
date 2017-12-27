
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { Movie } from './Classes/Movie';
import { Country } from './Classes/Countery';
import { Favorite } from './Classes/Favorite';



export class DataService {
    public Movies = [];
    public Countries : Country [];
    public Movieurl: string;
    public CountriesUrl: string;
    public Favorites=[];

    clickHandlerGet() {
        this.http.get(this.Movieurl)
            .subscribe(rsp => {
                this.Movies = rsp.json();
                this.Movies = Array.of(this.Movies);
                this.Movies = this.Movies[0].Search;
            },
            (err) => {
                console.log("error : " + err);
            });
    }

    CountriesGet() {
        this.http.get(this.CountriesUrl)
            .subscribe(rsp => {
                this.Countries = rsp.json();
            },
            (err) => {
                console.log("error : " + err);

            });
    }


    GetMovies() {
        return this.Movies;
    }
    GetCountries() {
        return this.Countries;
    }


    Add2Faorites(fav: any,provider:string) {
        let favor : Favorite;
        if(fav.Title!=null){ favor = {Provider:provider,name:fav.Title,Clicked:false}}
        else{ favor ={Provider:provider,name:fav.name,Clicked:false}}
        this.Favorites.push(favor);
    }
    RemoveFromFavorites(index: number) {
        this.Favorites.splice(index, 1);
    }
    GetFavorites() {
        return this.Favorites;
    }
    constructor( @Inject(Http) private http: Http) {

        this.Movieurl = "http://www.omdbapi.com/?s=Movie&apikey=995782be";
        this.CountriesUrl = 'https://restcountries.eu/rest/v2/regionalbloc/eu'
    }
}