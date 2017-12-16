import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import  rootRedux from '../reducer/index'
const store = createStore(
    rootRedux,
    applyMiddleware(thunk)
)
export default store