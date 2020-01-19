import Axios from 'axios'

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