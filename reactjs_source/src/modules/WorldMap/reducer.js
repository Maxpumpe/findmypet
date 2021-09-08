import {
    WORLDMAP_PAGE_INIT,
} from './actions';

// The initial state of the Login Reducer
export const initialState = {
counter: -1

  };

export default function(state = initialState,actions){
       
    switch(actions.type){
        case WORLDMAP_PAGE_INIT:
             //return {counter:state.counter +1};
        return {...state,counter: state.counter +1};
        
        default:        
            return state;
    }
}