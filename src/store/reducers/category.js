import * as actionTypes from '../actionTypes';
import requests from '../../components/requests';

const initialState = {
    currentOption: requests.fetchTrending
}


const categoryReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SETCATEGORY:
            return{
                ...state,
                currentOption: action.option
            }
        default:
            return state;
    }
};

export default categoryReducer;