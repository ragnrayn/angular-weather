import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrentWeather, IForecastWeather, IAstronomy } from '../utils/interfaces';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl: string = 'https://api.weatherapi.com/v1/';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<ICurrentWeather> {
    return this.http.get<ICurrentWeather>(
      `${this.baseUrl}current.json?key=f80570555e5344e5bb0191912240311&q=${city}`
    );
  }

  forecastWeather(city: string, days: string): Observable<IForecastWeather> {
    return this.http.get<IForecastWeather>(
      `${this.baseUrl}forecast.json?key=f80570555e5344e5bb0191912240311&q=${city}&days=${days}`
    );
  }

  searchWeather(searchTitle: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}search.json?key=f80570555e5344e5bb0191912240311&q=${searchTitle}`
    );
  }

  getTimezone(city: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}timezone.json?key=f80570555e5344e5bb0191912240311&q=${city}`
    );
  }

  getAstronomy(city: string, date: string): Observable<IAstronomy> {
    return this.http.get<IAstronomy>(
      `${this.baseUrl}astronomy.json?key=f80570555e5344e5bb0191912240311&q=${city}&dt=2021-06-25`
    );
  }
}
