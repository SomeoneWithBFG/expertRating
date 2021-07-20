import { createReducer } from '@reduxjs/toolkit'

import { setMethod } from './actions'

import * as CalculationInterfaces from './types'

const initialState: CalculationInterfaces.CalculationState = {
    type: '',
    x: 2,
    y: 2,
    commonMatrix: new Array(2).fill(Array(2).fill(0)),
    seqCompMatrix: new Array(2).fill({ index: '', weight: 0, resultWeight: 0 }),
}

console.log(setMethod)

const calculationReducer = createReducer(initialState, (builder) => {
    builder.addCase(setMethod, (state, action) => {
        console.log(21)
        //state.type = action.payload.method
    })
    //   .addCase(decrement, (state, action) => {
    //     state.value--
    //   })
    //   .addCase(incrementByAmount, (state, action) => {
    //     state.value += action.payload
    //   })
})

export default calculationReducer
