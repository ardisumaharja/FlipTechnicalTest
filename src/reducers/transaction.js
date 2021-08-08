import { GET_TRANSACTIONS } from '../constants'

export const GetTransactions = (state = [], action) =>{
    if(action.type === GET_TRANSACTIONS) { 
        return action.value
    }
    return state
}