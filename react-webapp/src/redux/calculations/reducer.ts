import { createReducer, PayloadAction } from '@reduxjs/toolkit'

import * as actions from './actions'

import * as CalculationInterfaces from './types'

const initialState: CalculationInterfaces.CalculationState = {
    method: 'pairComparsion',
    x: 2,
    y: 2,
    commonMatrix: new Array(2).fill(Array(2).fill(0)),
    seqCompMatrix: new Array(2).fill({ index: '', weight: 0, resultWeight: 0 }),
}

const calculationReducer = createReducer(initialState, {
    [actions.setMethod.type]: (state, action: PayloadAction<string>) => {
        return {
            ...state,
            method: action.payload,
            commonMatrix: new Array(state.y).fill(Array(state.x).fill(0)),
            seqCompMatrix: new Array(state.y).fill({
                index: '',
                weight: 0,
                resultWeight: 0,
            }),
        }
    },
    [actions.setMethodPairComp.type]: (
        state,
        action: PayloadAction<string>
    ) => {
        return {
            ...state,
            method: action.payload,
            y: state.x,
            commonMatrix: new Array(state.x).fill(Array(state.x).fill(0)),
            seqCompMatrix: new Array(state.x).fill({
                index: '',
                weight: 0,
                resultWeight: 0,
            }),
        }
    },
    [actions.setMethodSeqComp.type]: (state, action: PayloadAction<string>) => {
        return {
            ...state,
            method: action.payload,
            x: 2,
            commonMatrix: new Array(state.y).fill(Array(2).fill(0)),
            seqCompMatrix: new Array(state.y).fill({
                index: '',
                weight: 0,
                resultWeight: 0,
            }),
        }
    },

    [actions.setSizeX.type]: (state, action: PayloadAction<number>) => {
        return {
            ...state,
            x: action.payload,
            commonMatrix: new Array(state.y).fill(
                Array(action.payload).fill(0)
            ),
        }
    },

    [actions.setSizeY.type]: (state, action: PayloadAction<number>) => {
        return {
            ...state,
            y: action.payload,
            commonMatrix: new Array(action.payload).fill(
                Array(state.x).fill(0)
            ),
        }
    },

    [actions.setSizeYSeqComp.type]: (state, action: PayloadAction<number>) => {
        return {
            ...state,
            seqCompMatrix: new Array(action.payload).fill({
                index: '',
                weight: 0,
                resultWeight: 0,
            }),
            y: action.payload,
        }
    },

    [actions.setMatrixElement.type]: (
        state,
        action: PayloadAction<{ data: number[][] }>
    ) => {
        return { ...state, commonMatrix: action.payload.data }
    },

    [actions.setMatrixElementSeqCompIndex.type]: (
        state,
        action: PayloadAction<{
            data: CalculationInterfaces.sequentiallyComparisonMatrixElement[]
        }>
    ) => {
        return { ...state, seqCompMatrix: action.payload.data }
    },

    [actions.setMatrixElementSeqCompWeight.type]: (
        state,
        action: PayloadAction<{
            data: CalculationInterfaces.sequentiallyComparisonMatrixElement[]
        }>
    ) => {
        return { ...state, seqCompMatrix: action.payload.data }
    },
})

export default calculationReducer
