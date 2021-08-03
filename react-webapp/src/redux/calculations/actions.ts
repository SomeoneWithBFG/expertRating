import { createAction } from '@reduxjs/toolkit'

import * as CalculationInterfaces from './types'
import * as actionTypes from './actionTypes'

export const setMethod = createAction(
    actionTypes.SET_CALCULATION_METHOD,
    (method: string) => {
        return {
            payload: method,
        }
    }
)
export const setMethodPairComp = createAction(
    actionTypes.SET_CALCULATION_METHOD_PAIR_COMP,
    (method: string) => {
        return {
            payload: method,
        }
    }
)
export const setMethodSeqComp = createAction(
    actionTypes.SET_CALCULATION_METHOD_SEQ_COMP,
    (method: string) => {
        return {
            payload: method,
        }
    }
)

export const setSizeX = createAction(
    actionTypes.SET_MATRIX_SIZE_X_INCREASE,
    (x: number) => {
        return {
            payload: x,
        }
    }
)

export const setSizeY = createAction(
    actionTypes.SET_MATRIX_SIZE_Y_INCREASE,
    (y: number) => {
        return {
            payload: y,
        }
    }
)

export const setSizeYSeqComp = createAction(
    actionTypes.SET_MATRIX_SIZE_Y_SEQ_COMP_DECREASE,
    (y: number) => {
        return {
            payload: y,
        }
    }
)

export const setMatrixElement = createAction(
    actionTypes.SET_MATRIX_ELEMENT,
    (data: number[][]) => {
        return {
            payload: {
                data,
            },
        }
    }
)

export const setMatrixElementSeqCompIndex = createAction(
    actionTypes.SET_MATRIX_ELEMENT_SEQ_COMP_INDEX,
    (data: CalculationInterfaces.sequentiallyComparisonMatrixElement[]) => {
        return {
            payload: {
                data,
            },
        }
    }
)
export const setMatrixElementSeqCompWeight = createAction(
    actionTypes.SET_MATRIX_ELEMENT_SEQ_COMP_WEIGHT,
    (data: CalculationInterfaces.sequentiallyComparisonMatrixElement[]) => {
        return {
            payload: {
                data,
            },
        }
    }
)
