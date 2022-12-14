import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {
  apiUrl = "https://localhost:44338/api/"

  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>> {
    let newPath= this.apiUrl+"carImages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>> {
    let newPath= this.apiUrl+"carImages/getbycarid?carId="+ carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getCarImagesByImageId(id:number):Observable<ListResponseModel<CarImage>> {
    let newPath= this.apiUrl+"carImages/getbyimageid?imageId="+id
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
