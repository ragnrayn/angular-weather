import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient){}

  getCurrentWeather(): Observable<Object>{
    return this.http.get<Object>("https://api.weatherapi.com/v1/current.json?key=f80570555e5344e5bb0191912240311&q=Kyiv");
  }

}
