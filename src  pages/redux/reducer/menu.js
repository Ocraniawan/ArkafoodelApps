const initialState = {
    data: [],
    info:[],
    detail:[],
    suggess:[],
    isLoading: false,
    isError: false,
    isSuccess: true
  }
  
  const items = (state=initialState, action)=>{
    switch(action.type){
        case 'GET_ITEMS_PENDING':
        return {
          ...state,
          isLoading: true,
          isError: false
        }
      case 'GET_ITEMS_REJECTED':
        return {
          ...state,
          isError: true,
          isLoading:false
        }
      case 'GET_ITEMS_FULFILLED':
        return {
          ...state,
          data: action.payload.data.data,
          info: action.payload.data.info,
          isLoading:false,
          isError:false,
          isSuccess:true
        }
        case 'GET_DETAILITEM_PENDING':
          return {
            ...state,
            isLoading: true,
          }
        case 'GET_DETAILITEM_REJECTED':
          return {
            ...state,
            isError: true
          }
        case 'GET_DETAILITEM_FULFILLED':
          return {

            data: action.payload.data.data,
            suggess: action.payload.data.suggess,
          }
        case 'GET_ITEMSBUTTON_PENDING':
          return {
            ...state,
            isLoading: true,
          }
        case 'GET_ITEMSBUTTON_REJECTED':
          return {
            ...state,
            isError: true
          }
        case 'GET_ITEMSBUTTON_FULFILLED':
          return {
              ...state,
              data: action.payload.data.data,
              info: action.payload.data.info,
              isError:false,
              isLoading:false,
              isSuccess:true
          }
        default :
          return state
    }
     
  }
  
  export default items