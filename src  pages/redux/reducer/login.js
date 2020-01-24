const initialState = {
    data: [],
    isLoading: false,
      isError: false,
      isSuccess: true
    }
    
    const login = (state=initialState, action)=>{
      switch(action.type){
          case 'POST_LOGIN_PENDING':
          return {
            ...state,
            isLoading: true,
          }
        case 'POST_LOGIN_REJECTED':
          return {
            ...state,
            isLoading: false,
            isError: true,
            isSuccess: false,
          }
        case 'POST_LOGIN_FULFILLED':
          return {
              ...state,
            data: action.payload.data.auth,
            isLoading: false,
            isError: false,
            isSuccess: true,
          }
          default :
          return state
      }
        
    }
     
    export default login