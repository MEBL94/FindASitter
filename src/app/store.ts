import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { sittersReducer } from './sitters-list/sitters.reducer';
import { Sitter } from './entities/sitter';
import { Baby } from './entities/baby';
import { babiesReducer } from './babies-list/babies.reducer';


export class SittersState {
  isBaby: boolean;
  sitters: Sitter[];
  isProcessing: boolean;
}

export class BabiesState {
  isBaby: boolean;
  babies: Baby[];
  isProcessing: boolean;
}

// My app's state is defined here. Every variable that my application needs,
// should be here.
export class AppState {
  sitters?: SittersState;
  babies?: BabiesState;
}
export const rootReducer = combineReducers<AppState>({
sitters: sittersReducer,
babies: babiesReducer,

// router: routerReducer
});
