import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

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

    this.weatherService.forecastWeather('London', '5').subscribe((data) => {
      console.log('Forecast data', data);
      this.forecastWeather = data;
    }
  );

    this.weatherService.getCurrentWeather('London').subscribe((data) => {
      console.log('Weather data', data);
      this.weatherData = data;
    });

    this.weatherService.getTimezone('London').subscribe((data) => {
      console.log("Timezone", data);
      this.cityTimezone = data.location.localtime;
    })
  }

  searchCountry(): void {
    this.weatherService
      .getCurrentWeather(this.searchBarText)
      .subscribe((data) => {
        console.log('Search data', data);
        this.weatherData = data;
      });

    this.weatherService.forecastWeather(this.searchBarText, '5').subscribe((data) => {
      console.log('Forecast data', data);
      this.forecastWeather = data;
    });


    this.weatherService.getTimezone(this.searchBarText).subscribe((data) => {
      console.log("Timezone", data);
      this.cityTimezone = data.location.localtime;
    })
  }
}
