import * as types from '../types'

export const addToFavorites = (payload:{}) =>{
    return (dispatch:any) =>{
        dispatch({
            type:types.ADD_TO_FAVORITES,
            payload
        })
    }
}

export const removeFromFavorites = (payload:string) =>{
    return (dispatch:any) =>{
        dispatch({
            type:types.REMOVE_FROM_FAVORITES,
            payload
        })
    }
}

export const updatTheme = () =>{
    return (dispatch:any) =>{
        dispatch({
            type:types.UPDATE_THEME,
        })
    }
}