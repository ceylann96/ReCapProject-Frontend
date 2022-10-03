import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css']
})
export class CarDetailPageComponent implements OnInit {

  carDetail: Car[]=[]
  carImages: CarImage[]
  imageUrl = "https://localhost:44338"


  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,private carImageService:CarimageService) { }

  ngOnInit(): void {

  }

  getCarById(carId:number) {
  this.carService.getCarById(carId).subscribe(response=> {
  this.carDetail=response.data
  })
  }

  getCarImagesByCarId(carId:number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
    })
  }

  getCarImage(car:Car){
    if (car.imagePath == null) {
      let path = this.imageUrl + "/images/carDefault.png"
      return path;

    }
    else{
      let path = this.imageUrl + car.imagePath;
      return path;
    }
}

}
