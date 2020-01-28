import {combineReducers} from 'redux'

import items from './menu'
import restaurants from './restaurant'
import login from './login'
import carts from './cart'
import comment from './review'
import categories from './categories'


const appReducer = combineReducers({
    items,
    restaurants,
    login,
    carts,
    comment,
    categories,
})

export default appReducer