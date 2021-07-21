import * as actionTypes from './actionTypes'
import { createAction } from '@reduxjs/toolkit'

export const setMethod = createAction(
    actionTypes.SET_CALCULATION_METHOD,
    (method: string) => {
        return {
            payload: method,
        }
    }
)

export const setX = createAction(actionTypes.SET_MATRIX_SIZE_X, (x: number) => {
    return {
        payload: x,
    }
})

export const setY = createAction(actionTypes.SET_MATRIX_SIZE_Y, (y: number) => {
    return {
        payload: y,
    }
})

export const setMatrixElement = createAction(
    actionTypes.SET_MATRIX_ELEMENT,
    (element: number) => {
        return {
            payload: element,
        }
    }
)
