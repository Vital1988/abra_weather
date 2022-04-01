import * as types from '../types'
import {removeByKey,includes} from '../../utils/helpers'

const INITIAL_STATE = {
    favorites:[],
    darkTheme:false
}

export default function reducer(state=INITIAL_STATE,action:any){
    switch(action.type){
        case types.ADD_TO_FAVORITES:
            return {
                 ...state,
                 favorites:!includes(state.favorites,action.payload.id) ? [...state.favorites , action.payload] : [...state.favorites]
            }
        case types.REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites:removeByKey(state.favorites,action.payload)
            }
        case types.UPDATE_THEME:
                return {
                    ...state,
                    darkTheme:!state.darkTheme
                }        
        default:
            return state    
        }
}