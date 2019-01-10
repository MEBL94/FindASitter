import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sitter } from '../../entities/sitter';
import { SittersActions } from 'src/app/sitters-list/sitters.actions';
import { AppState } from 'src/app/store';
import { NgRedux } from '@angular-redux/store';
import { SitterService } from 'src/app/services/sitter.service/sitter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'display-sitter',
  templateUrl: './display-sitter.component.html',
  styleUrls: ['./display-sitter.component.scss']
})
export class DisplaySitterComponent implements OnInit {
  @Input() sitter: Sitter;
  @Output() sitterEditClicked: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private sittersActions: SittersActions,
              private ngRedux: NgRedux<AppState>, private sitterService: SitterService) { }

  sitters : Observable<Sitter[]> = this.sitterService.getSitters()
  ngOnInit() {
    // this.ngRedux.select(state => state.sitters)
    // .subscribe((sitterState) => {
    //   this.sitters = sitterState.sitters;
    // });
  }

  onDeleteClick() {
    this.sittersActions.deleteSitter(this.sitter._id);
  }

  onEditClick() {
    // Handle logic here, or pass event to parent component.
    this.sitterEditClicked.emit(this.sitter);
  }
}