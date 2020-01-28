import Axios from 'axios'
import qs from 'qs'



import {APP_URL} from '../../resources/config'

const url = APP_URL.concat('categories')

export const getCategories = ()=>{
    return {
        type: 'GET_CATEGORIES',
        payload: Axios.get(url.concat())
    }
}

export const getCategoryById = (id)=>{
    return {
        type: 'GET_CATEGORYBYID',
        payload: Axios.get(url.concat(`/detail/${id}`))
    }
}