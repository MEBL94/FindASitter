import { TempDataService } from '../services/temp-data.service';
import { Component, OnInit } from '@angular/core';
import { Sitter } from '../entities/sitter';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { SitterService } from '../services/sitter.service/sitter.service';

@Component({
  selector: 'app-sitters-list',
  templateUrl: './sitters-list.component.html',
  styleUrls: ['./sitters-list.component.scss']
})
export class SittersListComponent implements OnInit {
  sitters: Sitter[];

  /// year: 2000, month is 0-indexed, day is 1-indexed.
  // js-lib: momentjs
  birthday = new Date(2000, 10, 1);
  
  constructor(private ngRedux: NgRedux<AppState>,
    private sitterService: SitterService) { 
    // this.sitters = tempData.sitters;
  }

  ngOnInit() {
    this.ngRedux.select(x => x.sitters).subscribe((data) => {
      this.sitters = data.sitters;
    });

    this.sitterService.getSitters().subscribe((responseFromApi: any[]) => {
      const myData = responseFromApi.filter(x => x.customerId === 'chrk');
      console.log(myData);
    });
  }

  onSitterEditClicked(sitter: Sitter) {
    console.log("someone clicked sitter", sitter);
  }

}