const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
  }
  
  const restaurants = (state=initialState, action)=>{
    switch(action.type){
        case 'GET_RESTAURANTS_PENDING':
        return {
          ...state,
          isLoading: true,
        }
      case 'GET_RESTAURANTS_REJECTED':
        return {
          ...state,
          isError: true
        }
      case 'GET_RESTAURANTS_FULFILLED':
        return {
          data: action.payload.data.data,
        }
        case 'GET_RESTAURANTBYID_PENDING':
          return {
            ...state,
            isLoading: true,
          }
        case 'GET_RESTAURANTBYID_REJECTED':
          return {
            ...state,
            isError: true
          }
        case 'GET_RESTAURANTBYID_FULFILLED':
          return {
            data: action.payload.data.data,
          }
        default :
          return state
    }
     
  }
  
  export default restaurants