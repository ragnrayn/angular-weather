import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  weatherData: any = {};
  currentUserIP: any = "";

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

    this.weatherService.forecastWeather().subscribe(data => console.log("Forecast data", data));

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
