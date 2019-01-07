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
  constructor(private ngRedux: NgRedux<AppState>,
    private babyService: BabyService,
    private babies: Baby[]) { }

  ngOnInit() {
    this.ngRedux.select(x => x.babies).subscribe((data) => {
      this.babies = data.babies;
  });
}

}
