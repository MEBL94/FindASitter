import { Component, OnInit } from '@angular/core';
import { Baby } from '../entities/baby';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { BabyService } from '../services/baby.service/baby.service';

@Component({
  selector: 'app-babies-list',
  templateUrl: './babies-list.component.html',
  styleUrls: ['./babies-list.component.scss']
})
export class BabiesListComponent implements OnInit {
  babies : Baby[]

  constructor(private babyService: BabyService) { }


  ngOnInit() {
    this.babyService.getBabies().subscribe(responseFromApi =>{
      const myData = responseFromApi.filter(x => x.customerId === 'mathias');
      this.babies = myData;
      console.log(myData);
     })
    }
  }
