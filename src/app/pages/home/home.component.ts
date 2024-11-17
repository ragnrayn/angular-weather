import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  weatherData: any = {};
  forecastWeather: any = [];
  searchBarText: string = '';
  cityTimezone: string = '';
  errorHandler: Array<any> = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    forkJoin([
      this.weatherService.forecastWeather("London", "5"),
      this.weatherService.getCurrentWeather("London"),
      this.weatherService.getTimezone("London")
    ]).subscribe(data => {
      this.forecastWeather = data[0];
      this.weatherData = data[1];
      this.cityTimezone = data[2].location.localtime
    })
  }

  searchCountry(): void {
    forkJoin([
      this.weatherService.forecastWeather(this.searchBarText, '5'),
      this.weatherService.getCurrentWeather(this.searchBarText),
      this.weatherService.getTimezone(this.searchBarText)
    ]).subscribe(data => {
      this.forecastWeather = data[0];
      this.weatherData = data[1];
      this.cityTimezone = data[2].location.localtime
    })
  }
}
