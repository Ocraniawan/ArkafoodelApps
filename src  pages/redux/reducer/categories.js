const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
  }
  
  const categories = (state=initialState, action)=>{
    switch(action.type){
        case 'GET_CATEGORIES_PENDING':
        return {
          ...state,
          isLoading: true,
        }
      case 'GET_CATEGORIES_REJECTED':
        return {
          ...state,
          isError: true
        }
      case 'GET_CATEGORIES_FULFILLED':
        return {
          data: action.payload.data.data,
        }
        case 'GET_CATEGORYBYID_PENDING':
          return {
            ...state,
            isLoading: true,
          }
        case 'GET_CATEGORYBYID_REJECTED':
          return {
            ...state,
            isError: true
          }
        case 'GET_CATEGORYBYID_FULFILLED':
          return {
            data: action.payload.data.data,
          }
        default :
          return state
    }
     
  }
  
  export default categories