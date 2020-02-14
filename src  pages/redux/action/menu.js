import Axios from 'axios'
import qs from 'qs'

import {APP_URL} from '../../resources/config'

const url = APP_URL.concat('item')

export const getItems = ()=>{
    return {
        type: 'GET_ITEMS',
        payload: Axios.get(url)
    }
}

export const getDetailItem = (id)=>{
    return {
        type: 'GET_DETAILITEM', 
        payload: Axios.get(url.concat(`/${id}`))
    }
}


export const getButton = (url1)=>{
    return {
        type: 'GET_ITEMSBUTTON',
        payload: Axios.get(url1)
    }
}