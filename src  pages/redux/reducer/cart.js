const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
  }
  
  const carts = (state=initialState, action)=>{
    switch(action.type){
        case 'GET_CART_PENDING':
        return {
          ...state,
          isLoading: true,
        }
      case 'GET_CART_REJECTED':
        return {
          ...state,
          isError: true
        }
      case 'GET_CART_FULFILLED':
        return {
          data: action.payload.data.data,
        }
        case 'POST_CART_PENDING':
          return {
            ...state,
            isLoading: true,
          }
        case 'POST_CART_REJECTED':
          return {
            ...state,
            isError: true
          }
        case 'POST_CART_FULFILLED':
          return {
            data: action.payload.data.data,
          }
        default :
          return state
    }
     
  }
  
  export default carts