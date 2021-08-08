import { combineReducers, createStore } from 'redux'
import { Loading } from './process'
import { GetTransactions } from './transaction'

const rootReducer = combineReducers({
    Loading, GetTransactions
})

const store = createStore(rootReducer)

export default store 