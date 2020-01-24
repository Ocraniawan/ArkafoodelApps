const initialState = {
    count:0,
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
  }
  
  const comment = (state=initialState, action)=>{
    switch(action.type){
      case 'GET_COMMENT_BY_ID_PENDING':
        return {
          ...state,
          isLoading: true,
          isError: false,
        }
      case 'GET_COMMENT_BY_ID_REJECTED':
        return {
          ...state,
          isLoading: false,
          isError: true
        }
      case 'GET_COMMENT_BY_ID_FULFILLED':
        return {
          count: action.payload.data.data.length,
          data: action.payload.data,
          isLoading: false,
          isError: false
        }
        case 'POST_COMMENT_PENDING':
        return {
          ...state,
          isLoading: true,
          isError: false,
        }
      case 'POST_COMMENT_REJECTED':
        return {
          ...state,
          isLoading: false,
          isError: true
        }
      case 'POST_COMMENT_FULFILLED':
        return {
          count: action.payload.data.data.length,
          data: action.payload.data.data,
          isLoading: false,
          isError: false
        }
        default :
          return state
    }
  }
  
  export default comment