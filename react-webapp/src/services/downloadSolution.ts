import * as ResultTypes from '../dataTypes/resultTypes'

function pairComparsion(solution: ResultTypes.PairComparsionResult): string {
    const data = {
        values: '',
        sumOfValues: 0,
        weights: '',
        order: '',
    }
    solution.values.forEach((item, index) => {
        data.values += index + 1 + ': ' + item
        if (index + 1 !== solution.values.length) {
            data.values += ' | '
        }
    })
    data.sumOfValues = solution.sumOfValues
    solution.weights.forEach((item, index) => {
        data.weights += index + 1 + ': ' + item
        if (index + 1 !== solution.weights.length) {
            data.weights += ' | '
        }
    })
    data.order = solution.order
    let str = ''
    str += 'Цена каждой цели: ' + data.values + '\n'
    str += 'Сумма цен: ' + data.sumOfValues + '\n'
    str += 'Исковые веса целей: ' + data.weights + '\n'
    str += 'Порядок предпочтения целей: | ' + data.order + '\n'
    return str
}

function sequentiallyComparison(
    solution: ResultTypes.SequentiallyComparisonResult
): string {
    const data = {
        causedCorrections: '',
        correctedEvaluations: '',
        sumOfWeights: 0,
        weights: '',
        order: '',
    }
    data.causedCorrections = solution.causedCorrections
    data.sumOfWeights = solution.sumOfWeights
    solution.correctedEvaluations.forEach((item, index) => {
        data.correctedEvaluations += item
        if (index + 1 !== solution.correctedEvaluations.length) {
            data.correctedEvaluations += ', '
        }
    })
    solution.weights.forEach((item, index) => {
        data.weights += item
        if (index + 1 !== solution.weights.length) {
            data.weights += ', '
        }
    })
    data.order = solution.order
    let str = ''
    str +=
        'Тройки целей, вызвавшие коррекцию весов: ' +
        data.causedCorrections +
        '\n'
    str += 'Скорректированные оценки: ' + data.correctedEvaluations + '\n'
    str += 'Веса целей: ' + data.weights + '\n'
    str += 'Сумма весов целей: ' + data.sumOfWeights + '\n'
    str += 'Порядок предпочтения целей: ' + data.order + '\n'
    return str
}

function weighing(solution: ResultTypes.WeighingResult): string {
    const data = {
        sumOfMarks: 0,
        relativeExpertsMarks: '',
        weights: '',
        order: '',
    }
    data.sumOfMarks = solution.sumOfMarks
    solution.relativeExpertsMarks.forEach((item, index) => {
        data.relativeExpertsMarks += index + 1 + ': ' + item
        if (index + 1 !== solution.relativeExpertsMarks.length) {
            data.relativeExpertsMarks += ', '
        }
    })
    solution.weights.forEach((item, index) => {
        data.weights += index + 1 + ': ' + item
        if (index + 1 !== solution.weights.length) {
            data.weights += ', '
        }
    })
    data.order = solution.order
    let str = ''
    str += 'Сумма оценок экспертов: ' + data.sumOfMarks + '\n'
    str += 'Относительные оценки экспертов: ' + data.relativeExpertsMarks + '\n'
    str += 'Искомые веса: ' + data.weights + '\n'
    str += 'Порядок предпочтения целей: ' + data.order + '\n'
    return str
}

function preference(solution: ResultTypes.PreferenceResult): string {
    const data = {
        modMatrix: Array(solution.modMatrix.length).fill(''),
        sumMarks: '',
        sumOfMarks: '',
        weights: '',
        order: '',
    }
    solution.modMatrix.forEach((arr, arrayIndex) => {
        arr.forEach((item) => {
            data.modMatrix[arrayIndex] += item + ' '
        })
    })
    solution.sumMarks.forEach((item, index) => {
        data.sumMarks += index + 1 + ': ' + item
        if (index + 1 !== solution.sumMarks.length) {
            data.sumMarks += ' | '
        }
    })
    solution.weights.forEach((item, index) => {
        data.weights += index + 1 + ': ' + item
        if (index + 1 !== solution.weights.length) {
            data.weights += ' | '
        }
    })
    data.sumOfMarks = solution.sumOfMarks.toString()
    data.order = solution.order
    let str = ''
    str += 'Модифицированная матрица предпочтения: \n'
    data.modMatrix.forEach((item) => {
        str += item + '\n'
    })
    str += 'Суммарные оценки предпочтения: ' + data.sumMarks + '\n'
    str += 'Сумма всех оценок: ' + data.sumOfMarks + '\n'
    str += 'Искомые веса целей: ' + data.weights + '\n'
    str += 'Порядок предпочтения целей: ' + data.order + '\n'
    return str
}

function kondorse(solution: ResultTypes.KondorseResult): string {
    let str = ''
    str += 'Матрица оценок: \n'
    solution.modMatrix.forEach((arr) => {
        arr.forEach((item) => {
            str += item + '\t'
        })
        str += '\n'
    })
    str += 'Альтернатива Кондорсе: ' + solution.best + '\n'
    return str
}

function kemeniSnella(solution: ResultTypes.KemeniSnellaResult): string {
    let str = ''
    str += 'Матрицы бинарных предпочтений: \n'
    solution.binaryMatrixArray.forEach((matrix, mIndex) => {
        str += 'Эксперт ' + (mIndex + 1) + '\n'
        matrix.forEach((arr) => {
            arr.forEach((item) => {
                str += item + '\t'
            })
            str += '\n'
        })
        str += '\n'
    })
    str += 'Матрица потерь: \n'
    solution.looseMatrix.forEach((arr) => {
        arr.forEach((item) => {
            str += item + '\t'
        })
        str += '\n'
    })
    str += '\nРезультат: ' + solution.order
    return str
}

function fileGenerator(solution: any, method: string): string {
    switch (method) {
        case 'pairComparsion':
            return pairComparsion(solution)
        case 'sequentiallyComparison':
            return sequentiallyComparison(solution)
        case 'weighing':
            return weighing(solution)
        case 'preference':
            return preference(solution)
        case 'kondorse':
            return kondorse(solution)
        case 'kemeniSnella':
            return kemeniSnella(solution)
        default:
            return 'error in generator, try again'
    }
}

export default function download(solution: any, method: string): void {
    let element = document.createElement('a')
    let text = fileGenerator(solution, method)
    element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    )
    element.setAttribute('download', 'solution.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
}
