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

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

    this.weatherService.forecastWeather("London", "5").subscribe(data => {
      console.log("Forecast data", data);
      this.forecastWeather = data;
    });

    this.weatherService.getCurrentWeather('London').subscribe((data) => {
      console.log('Weather data', data);
      this.weatherData = data;
    });
  }


  searchCountry(text: any): void {
    this.weatherService
      .getCurrentWeather(text.target.value)
      .subscribe((data) => {
        console.log('Search data', data);
        this.weatherData = data;
      });
  }
}
