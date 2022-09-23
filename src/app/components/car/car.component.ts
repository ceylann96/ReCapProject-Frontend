import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = []
  imageUrl = "https://localhost:44338"
  filterText ="";
  currentCar:Car


  constructor(private carService: CarService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      if(params ["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }
      if(params ["colorId"]) {
        this.getCarsByColor(params["colorId"])
      }
      else {
        this.getCars();
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
    })
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe(response=> {
      this.cars=response.data
      })
  }

  getCarsByColor(colorId:number) {
    this.carService.getCarsByColor(colorId).subscribe(response=> {
      this.cars=response.data
      })
  }
  setCurrentCarDetail(car:Car){
    this.toastrService.success( "Detayı Getirildi.", car.carName);
    this.currentCar = car;
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
