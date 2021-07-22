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
        return { ...state, method: action.payload }
    },

    [actions.setX.type]: (state, action: PayloadAction<number>) => {
        if (state.method === 'sequentiallyComparison') {
            return { ...state, x: action.payload }
        }
        let newMatrix = state.commonMatrix.slice()
        if (state.x > action.payload) {
            newMatrix.splice(action.payload)
            return { ...state, commonMatrix: newMatrix, x: action.payload }
        }
        for (let i = 0; i < state.y; i++) {
            newMatrix[i] = newMatrix[i].concat(Array(action.payload-state.x).fill(0))
        }
        return { ...state, commonMatrix: newMatrix, x: action.payload }
    },

    [actions.setY.type]: (state, action: PayloadAction<number>) => {
        if (state.method === 'sequentiallyComparison') {
            let newMatrix = state.seqCompMatrix.slice()
            if (state.y > action.payload) {
                newMatrix.splice(action.payload)
                return { ...state, seqCompMatrix: newMatrix, y: action.payload }
            }
            for (let i = state.y; i < action.payload; i++) {
                newMatrix.push({ index: '', weight: 0, resultWeight: 0 })
            }
            return { ...state, seqCompMatrix: newMatrix, y: action.payload }
        }
        let newMatrix = state.commonMatrix.slice()
        if (state.y > action.payload) {
            newMatrix.splice(action.payload)
            return { ...state, commonMatrix: newMatrix, y: action.payload }
        }
        for (let i = state.y; i < action.payload; i++) {
            newMatrix.push(Array(state.x).fill(0))
        }
        return { ...state, commonMatrix: newMatrix, y: action.payload }
    },
})

export default calculationReducer
