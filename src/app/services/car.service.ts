import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiurl = "https://localhost:44338/api/"

  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiurl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number) {
    let newPath = this.apiurl+"cars/getcarbybrandid?brandid="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number) {
    let newPath = this.apiurl+"cars/getcarbycolorid?colorid="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
