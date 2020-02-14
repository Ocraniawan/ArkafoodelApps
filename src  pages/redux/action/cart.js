import Axios from 'axios'
import qs from 'qs'



import {APP_URL} from '../../resources/config'
const url = APP_URL.concat('cart')

export const getCart = (id)=>{
    return {
        type: 'GET_CART',
        payload: Axios.get(url.concat(`/${id}`),{
            headers : { 
                Authorization : 'Bearer ' + token
        }
        })
    }
}

export const addToCart = (item_id,user_id,quantity)=>{
    console.log(item_id,user_id,quantity)
    return {
        type: 'POST_CART',
        payload: Axios.post(url.concat(`/`),{item_id,user_id,quantity})
    }
}