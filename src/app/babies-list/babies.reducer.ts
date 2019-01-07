import { BabiesState } from "../store";
import { TempDataService } from "../services/temp-data.service";
import { BabiesActions } from "./babies.actions";
import { tassign } from "tassign";

const INITIAL_STATE: BabiesState = TempDataService.getInitialBabyTestState();

export function babiesReducer(state: BabiesState = INITIAL_STATE, action:any) {
    switch (action.type) {
        case BabiesActions.CREATE_BABY: // no payload, just set spinner
          return tassign(state, { babies: [...state.babies, action.payload]});
    
        //case BabiesActions.CREATE_BABY_FAILURE: // If web service call fails.
        //  return tassign(state, { isProcessing: false });
    
        //case SittersActions.CREATE_SITTER_SUCCESS: //action.payload is a sitter object.
        //  return tassign(state, { isProcessing: false, sitters:  [...state.sitters, action.payload]});
      
        case BabiesActions.DELETE_BABY:
          return tassign(state, { babies: 
            state.babies.filter(baby => baby._id !== action.payload) });
        
        case BabiesActions.SET_REGISTER_BABYTYPE: 
    
          return tassign(state, { isBaby: action.payload });
     
        default:
          return state;
      }
    }