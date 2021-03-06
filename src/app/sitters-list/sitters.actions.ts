
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './../store';
import { Sitter } from '../entities/sitter';
import { SitterService } from '../services/sitter.service/sitter.service';

@Injectable({
  providedIn: 'root'
})
// This class is an action creator.
export class SittersActions {

  // We dependency inject the redux library.
  constructor (
    private ngRedux: NgRedux<AppState>,
    private sitterService: SitterService) {}
  
    // This gives a strongly typed way to call an action.
  static GET_ALL_SITTERS = 'GET_ALL_SITTERS';
  static SET_REGISTER_BABYTYPE = 'SET_REGISTER_BABYTYPE';
  static CREATE_SITTER = 'CREATE_SITTER';
  static DELETE_SITTER = 'DELETE_SITTER';

  // This method can be called from a component, and will dispatch an action.
  // Parameter is what we want to pass from the component to the reducer.
  setType(isBaby: boolean): void {
    this.ngRedux.dispatch({
      type: SittersActions.SET_REGISTER_BABYTYPE,
      payload: isBaby
    });
  }

  getSitters() {
    return this.sitterService.getSitters();
  }

  createSitter(sitter: Sitter): void {
    console.log('1');

    this.sitterService.createSitter(sitter).subscribe(response => {
      console.log('3');
      console.log(response);

      this.ngRedux.dispatch({
        type: SittersActions.CREATE_SITTER,
        payload: sitter
      });
    }, error => {
      console.log('3');
      console.log(error);
    });

    console.log('2');
  }

  deleteSitter(sitterId: number): void {
    this.ngRedux.dispatch({
      type: SittersActions.DELETE_SITTER,
      payload: sitterId
    });
  }

}





