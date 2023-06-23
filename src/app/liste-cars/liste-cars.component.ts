import { Component, OnInit } from '@angular/core';
import { model } from 'src/models/model.model';

@Component({
  selector: 'app-liste-cars',
  templateUrl: './liste-cars.component.html',
  styleUrls: ['./liste-cars.component.css']
})
export class ListeCarsComponent implements OnInit {

  tab!:model[];
  ngOnInit(): void {
    this.tab=[{
      carModel:"ZV2",
      carColor:"red",
      carBrand:"Mercedes",
      carImage:"/assets/hakon-sataoen-qyfco1nfMtg-unsplash.jpg",
      carKm:565,
      carPice:52224
    },
    {
      carModel:"H54",
      carColor:"orange",
      carBrand:"BMW",
      carImage:"assets/dan-gold-N7RiDzfF2iw-unsplash.jpg",
      carKm:8795,
      carPice:52224
    },
    {
      carModel:"A8",
      carColor:"black",
      carBrand:"Mercedes",
      carImage:"assets/lance-asper-N9Pf2J656aQ-unsplash.jpg",
      carKm:878999985,
      carPice:52224
    },
    {
      carModel:"M9",
      carColor:"white",
      carBrand:"Audi",
      carImage:"assets/olav-tvedt-yq-efMJMuPg-unsplash.jpg",
      carKm:8795,
      carPice:52224
    }]
  }

}
