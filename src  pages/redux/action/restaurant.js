import Axios from 'axios'
import qs from 'qs'

import {APP_URL} from '../../resources/config'

const url = APP_URL.concat('restaurant')

export const getRestaurants = ()=>{
    return {
        type: 'GET_RESTAURANTS',
        payload: Axios.get(url.concat())
    }
}

export const getDetailRestaurants = (id)=>{
    return {
        type: 'GET_RESTAURANTBYID',
        payload: Axios.get(url.concat(`/menu/${id}`))
    }
}