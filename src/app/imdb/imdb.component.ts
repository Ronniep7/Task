import { Component, OnInit, Optional } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../data.service';
import { Movie } from '../Classes/Movie';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css'],
})
export class ImdbComponent implements OnInit {
  Movies: Movie[];
  Key = "995782be";
  Clicked = false;
  constructor(private Http: Http, private Service: DataService) { }

  ngOnInit() {
    this.Service.clickHandlerGet();
    setTimeout(() => {
      this.clickHandlerGet();
    }, 250);

  }
  AddToFavorites(index: number) {
    this.Movies[index].Clicked = true;
    this.Service.Add2Faorites(this.Movies[index], 'Imdb');

  }
  clickHandlerGet() {
    this.Movies = this.Service.GetMovies();

  }
}
