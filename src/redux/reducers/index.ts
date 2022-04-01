import {combineReducers} from 'redux'
import weather from './weather';

const reducers = combineReducers({weather});
const rootReducer = (state:any,action:any) => {
    return reducers(state,action);
}

export default rootReducer;