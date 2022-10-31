import {R_SUCCESS,R_FAIL}  from '../constants/restConstants'

export const restaurantListReducer= (state={restaurant:[]},action)=>{
    console.log(action.payload);

    switch(action.type){
        case R_SUCCESS:
            return{restaurant:action.payload}

        case R_FAIL:
            return{restaurant:action.error}
        default:
            return state    

    }


}