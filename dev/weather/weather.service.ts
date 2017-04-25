import {Injectable} from "angular2/core";
import {WEATHER_ITEMS} from "./weather.data";
import {Http} from 'angular2/http';
import {WeatherItem} from "./weather-item";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
@Injectable()
export class WeatherService {

    constructor(private _http:Http){};
    getWeatherItems() {
        return WEATHER_ITEMS;
    }
    addWeatherItem(weatherItem: WeatherItem)
    {
        WEATHER_ITEMS.push(weatherItem);
    }
    searchWeatherData(cityName: string): Observable<any> {
       return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName +
           '&APPID=0a62c7e939c6191d09d870fb18f17407&units=metric')
        .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json())
            });
    }
}