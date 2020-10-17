import * as actionTypes from '../actionTypes';

export const setOption = (option)=>{
    return{
        type: actionTypes.SETCATEGORY,
        option
    }
}