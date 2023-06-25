import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'src/models/model.model';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  
  @Input()carInfo!:Model;


  ngOnInit(): void {
   
  }

}
