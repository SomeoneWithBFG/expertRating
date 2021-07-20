import thunk from 'redux-thunk'
import calculationReducer from './calculations/reducer'
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    calculationReducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, ...getDefaultMiddleware()],
})

export default store
