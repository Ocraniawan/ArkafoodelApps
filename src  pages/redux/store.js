// import {createStore, applyMiddleware} from 'redux'
// import {createLogger} from 'redux-logger'
// import {persistStore, persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import PromiseMiddleware from 'redux-promise-middleware'

// import reducer from './reducer'

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistReducer = persistReducer(persistConfig, reducer)

// const logger = createLogger({})

// export default ()=>{
//     const store = createStore(
//         persistReducer,
//         applyMiddleware(
//             logger,
//             PromiseMiddleware
//         )
//     )
//     const persistor = persistStore(store)
//     return {store, persistor}
// }


import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import promiseMiddleware from 'redux-promise-middleware'

import reducer from './reducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const logger = createLogger({})

export default () => {
    const store = createStore(
        persistedReducer,
        applyMiddleware(
            logger,
            promiseMiddleware
        ))
    const persistor = persistStore(store)
    return {
        store,
        persistor
    }
}