import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ICurrentWeather{}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private http: HttpClient){}

  getCurrentWeather(text: string): Observable<Object>{
    return this.http.get<Object>(`https://api.weatherapi.com/v1/current.json?key=f80570555e5344e5bb0191912240311&q=${text}`);
  }

  forecastWeather(city: string, days: string): Observable<any>{
    return this.http.get<any>(`https://api.weatherapi.com/v1/forecast.json?key=f80570555e5344e5bb0191912240311&q=${city}&days=${days}`)
  }

  searchWeather(searchTitle: string): Observable<any> {
    return this.http.get<any>(`https://api.weatherapi.com/v1/search.json?key=f80570555e5344e5bb0191912240311&q=${searchTitle}`);
  }

}
