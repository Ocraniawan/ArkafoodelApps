import Axios from 'axios'
import qs from 'qs'



import {APP_URL} from '../../resources/config'


const url = APP_URL.concat('cart')

export const getCart = (id, token)=>{
    return {
        type: 'GET_CART',
        payload: Axios.get(url.concat(`/${id}`),{
            headers : { 
                Authorization : 'Bearer ' + token
        }
        })
    }
}

export const postCart = (id)=>{
    return {
        type: 'POST_CART',
        payload: Axios.post(url.concat(`/${id}`))
    }
}