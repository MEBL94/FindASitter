import { TempDataService } from '../services/temp-data.service';
import { Component, OnInit } from '@angular/core';
import { Sitter } from '../entities/sitter';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { SitterService } from '../services/sitter.service/sitter.service';
import { SittersActions} from '../sitters-list/sitters.actions';
import { sittersReducer } from './sitters.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sitters-list',
  templateUrl: './sitters-list.component.html',
  styleUrls: ['./sitters-list.component.scss']
})
export class SittersListComponent implements OnInit {

  /// year: 2000, month is 0-indexed, day is 1-indexed.
  // js-lib: momentjs
  birthday = new Date(2000, 10, 1);
  sitters : Sitter[];
  
  constructor(private sitterService: SitterService) { 
  }

  

  ngOnInit() {
    this.sitterService.getSitters().subscribe(responseFromApi =>{
     const myData = responseFromApi.filter(x => x.customerId === 'mathias');
     this.sitters = myData;
     console.log(myData);
    })
   }

  onSitterEditClicked(sitter: Sitter) {
    console.log("someone clicked sitter", sitter);
  }

}