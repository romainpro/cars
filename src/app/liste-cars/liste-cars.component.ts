import { Component, OnInit } from '@angular/core';
import { Model } from 'src/models/model.model';
import { CarsArrayService } from 'src/services/cars-array.service';

@Component({
  selector: 'app-liste-cars',
  templateUrl: './liste-cars.component.html',
  styleUrls: ['./liste-cars.component.css']
})
export class ListeCarsComponent implements OnInit {

  tab!:Model[];
  constructor(private listeCars:CarsArrayService){

  }
  ngOnInit(): void {
    const cardId = 4; 
    this.tab = this.listeCars.getcars(cardId);
    // this.tab=this.listeCars.getcars();
}
}
