import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './../store';
import { Baby } from '../entities/baby';
import { BabyService } from '../services/baby.service/baby.service';

@Injectable({
  providedIn: 'root'
})
// This class is an action creator.
export class BabiesActions {

  // We dependency inject the redux library.
  constructor(
    private ngRedux: NgRedux<AppState>,
    private babyService: BabyService) {
  }

  // This gives a strongly typed way to call an action.
  static GET_BABY = 'GET_BABY';
  static GET_BABIES = 'GET_BABIES';
  static SET_REGISTER_BABYTYPE = 'SET_REGISTER_BABYTYPE';
  static CREATE_BABY = 'CREATE_BABY';
  static CREATE_BABY_SUCCESS = 'CREATE_BABY_SUCCESS';
  static CREATE_BABY_FAILURE = 'CREATE_BABY_FAILURE';
  static DELETE_BABY = 'DELETE_BABY';

  getBabies() {
    this.ngRedux.dispatch({
      type: BabiesActions.GET_BABIES
    });
    this.babyService.getBabies();
  }
  // This method can be called from a component, and will dispatch an action.
  // Parameter is what we want to pass from the component to the reducer.
  setType(isBaby: boolean): void {
    this.ngRedux.dispatch({
      type: BabiesActions.SET_REGISTER_BABYTYPE,
      payload: isBaby
    });
  }
  createBaby(baby: Baby): void {
    console.log('1');

    this.ngRedux.dispatch({
      type: BabiesActions.CREATE_BABY,
      payload: baby
    });

    // action creator calls web service, and dispatches new redux action.
    this.babyService.createBaby(baby).subscribe(response => {
      console.log('3');
      console.log(response);
      // If all goes well.
      this.ngRedux.dispatch({
        type: BabiesActions.CREATE_BABY_SUCCESS,
        payload: baby // response could be used as payload.
        // sitter obj is missing the new _id generated in the database.
      });
    }, error => {
      console.log('3');
      console.log(error);

      // If web service fails.
      this.ngRedux.dispatch({
        type: BabiesActions.CREATE_BABY_FAILURE,
        payload: error
      });
    });
    console.log('2');
  }

  deleteBaby(babyId: number) {

    this.babyService.deleteBaby(babyId).subscribe(responseFromApi => {

      this.ngRedux.dispatch({
        type: BabiesActions.DELETE_BABY,
        payload: babyId
      }), error => {
        console.log('3 error');
      }
      console.log('2');
      return responseFromApi;
    })
  }
}
