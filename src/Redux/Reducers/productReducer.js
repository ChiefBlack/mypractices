const initialState={
products:[]

}



export  const productReducer=(state = initialState, action)=>{
switch (action.type) {
    case "SET_PRODUCT":
         return {...state,
            products:action.payload
        };
   
    // case "SELECTED_ITEM":
    //     return action.payload
    //     break;

    default:
        return {...state};
}

}
 export  const selectedProductReducer=(state ={}, action)=>{
        switch (action.type) {
            case "SELECTED_PRODUCT":
                
             return{...state,
                    ...action.payload
            } 
        
            default:
                return state;
        }

 }