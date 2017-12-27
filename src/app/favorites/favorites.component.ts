import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../data.service';
import { Favorite } from '../Classes/Favorite';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  Favorites : Favorite [];

  constructor(private Http: Http,private Service:DataService) { }

  ngOnInit() {
    this.Favorites=this.Service.GetFavorites();
    console.log(this.Favorites)
  }
  RemoveFromFavorites(index:number)
  {
    this.Favorites.slice(index,1);
    this.Service.RemoveFromFavorites(index);
  }
}
