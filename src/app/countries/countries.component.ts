import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../data.service';
import { Country } from '../Classes/Countery';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  Countries: Country[];
  Clicked = false;
  constructor(private Http: Http, private Service: DataService) { }

  ngOnInit() {
  this.Service.CountriesGet();
  setTimeout(() => {
    this.clickHandlerGet();
  }, 250);
  }
  AddToFavorites(index: number) {
    this.Countries[index].Clicked = true;
    this.Service.Add2Faorites(this.Countries[index],'Restcountries');

  }
  clickHandlerGet() {
    this.Countries = this.Service.GetCountries();
  }
}
