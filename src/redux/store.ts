import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'


const composeEnhancers = compose
const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware),
  )
const configStore = () => createStore(rootReducer,enhancer);

export default configStore;

