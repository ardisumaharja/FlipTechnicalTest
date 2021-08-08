import { SET_LOADING } from "../constants"
import { URL_API } from "../env"

export const Actions = async (dispatch, actionType) => {
    dispatch({type : SET_LOADING, value : true})
    try {
        fetch(`${URL_API}`,{
            method : 'GET',
            headers : {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('response_'+actionType+'_result',data)
            dispatch({type : actionType, value : data})
            dispatch({type : SET_LOADING, value : false})
        })
        .catch(error=>{
            dispatch({type : SET_LOADING, value : false})
            console.log('response_'+actionType+'_error_1', error)
        })
    } catch (error) {
        dispatch({type : SET_LOADING, value : false})
        console.log('response_'+actionType+'_error_2', error)
    }
}