import React from 'react'

import KemeniSnella from '../../../common/Outputs/KemeniSnella/'
import Kondorse from '../../../common/Outputs/Kondorse/'
import PairComparsion from '../../../common/Outputs/PairComparsion/'
import Preference from '../../../common/Outputs/Preference/'
import SequentiallyComparison from '../../../common/Outputs/SequentiallyComparsion/'
import Weighing from '../../../common/Outputs/Weighing/'

const method = () => {
    return "Weighing"
}

const Output: React.FC = () => {
    switch(method()) {
        case 'KemeniSnella': return <KemeniSnella />
        case 'Kondorse': return <Kondorse />
        case 'PairComparsion': return <PairComparsion />
        case 'Preference': return <Preference />
        case 'SequentiallyComparison': return <SequentiallyComparison />
        case 'Weighing': return <Weighing />
        default: return <> </>
    }
}

export default Output
