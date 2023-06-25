import { Injectable } from '@angular/core';
import {  Model } from 'src/models/model.model';

@Injectable({
  providedIn: 'root'
})
export class CarsArrayService {

  tab:Model[]=[{
    cardId:1,
    carModel:"ZV2",
    carColor:"red",
    carBrand:"Mercedes",
    carImage:"/assets/hakon-sataoen-qyfco1nfMtg-unsplash.jpg",
    carKm:565,
    carPice:52224
  },
  {
    cardId:2,
    carModel:"H54",
    carColor:"orange",
    carBrand:"BMW",
    carImage:"assets/dan-gold-N7RiDzfF2iw-unsplash.jpg",
    carKm:8795,
    carPice:52224
  },
  {
    cardId:3,
    carModel:"A8",
    carColor:"black",
    carBrand:"Mercedes",
    carImage:"assets/lance-asper-N9Pf2J656aQ-unsplash.jpg",
    carKm:878999985,
    carPice:52224
  },
  {
    cardId:4,
    carModel:"M9",
    carColor:"white",
    carBrand:"Audi",
    carImage:"assets/olav-tvedt-6lSBynPRaAQ-unsplash.jpg",
    carKm:8795,
    carPice:52224
  }]

getcars(id:number):Model[]{
  return this.tab.filter(car => car.cardId === id);
}
}



