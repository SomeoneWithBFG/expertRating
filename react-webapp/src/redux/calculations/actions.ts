import * as actionTypes from './actionTypes'
import { createAction } from '@reduxjs/toolkit'

export const setMethod = createAction(
    actionTypes.SET_CALCULATION_METHOD,
    (method: string) => {
        console.log(1)
        return {
            payload: {
                method,
            },
        }
    }
)
