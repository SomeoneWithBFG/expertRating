function pairComparsion(solution) {
  var data = {
    values: '',
    sumOfValues: 0,
    weights: '',
    order: '',
  }
  solution.values.map((item, index) => {
    data.values += index + 1 + ': ' + item
    if (index + 1 !== solution.values.length) data.values += ' | '
  })
  data.sumOfValues = solution.sumOfValues
  solution.weights.map((item, index) => {
    data.weights += index + 1 + ': ' + item.toFixed(4)
    if (index + 1 !== solution.weights.length) data.weights += ' | '
  })
  data.order = solution.order
  var str = ''
  str += 'Цена каждой цели: ' + data.values + '\n'
  str += 'Сумма цен: ' + data.sumOfValues + '\n'
  str += 'Исковые веса целей: ' + data.weights + '\n'
  str += 'Порядок предпочтения целей: ' + data.order + '\n'
  return str
}

function sequentiallyComparison(solution) {
  var data = {
    causedCorrections: '',
    correctedEvaluations: '',
    sumOfWeights: 0,
    weights: '',
    order: '',
  }
  data.causedCorrections = solution.causedCorrections
  data.sumOfWeights = solution.sumOfWeights
  solution.correctedEvaluations.map((item, index) => {
    data.correctedEvaluations += item
    if (index + 1 !== solution.correctedEvaluations.length)
      data.correctedEvaluations += ', '
  })
  solution.weights.map((item, index) => {
    data.weights += item.toFixed(4)
    if (index + 1 !== solution.weights.length) data.weights += ', '
  })
  var foo = solution.weights
  data.order = solution.order
  var str = ''
  str +=
    'Тройки целей, вызвавшие коррекцию весов: ' + data.causedCorrections + '\n'
  str += 'Скорректированные оценки: ' + data.correctedEvaluations + '\n'
  str += 'Веса целей: ' + data.weights + '\n'
  str += 'Сумма весов целей: ' + data.sumOfWeights + '\n'
  str += 'Порядок предпочтения целей: ' + data.order + '\n'
  return str
}

function weighing(solution) {
  var data = {
    sumOfMarks: 0,
    relativeExpertsMarks: '',
    weights: '',
    order: '',
  }
  data.sumOfMarks = solution.sumOfMarks
  solution.relativeExpertsMarks.map((item, index) => {
    data.relativeExpertsMarks += index + 1 + ': ' + item
    if (index + 1 !== solution.relativeExpertsMarks.length)
      data.relativeExpertsMarks += ', '
  })
  solution.weights.map((item, index) => {
    data.weights += index + 1 + ': ' + item.toFixed(4)
    if (index + 1 !== solution.weights.length) data.weights += ', '
  })
  data.order = solution.order
  var str = ''
  str += 'Сумма оценок экспертов: ' + data.sumOfMarks + '\n'
  str += 'Относительные оценки экспертов: ' + data.relativeExpertsMarks + '\n'
  str += 'Искомые веса: ' + data.weights + '\n'
  str += 'Порядок предпочтения целей: ' + data.order + '\n'
  return str
}

function preference(solution) {
  var numOfEl = solution.modMatrix[0].length
  var data = {
    modMatrix: Array(solution.modMatrix.length).fill(''),
    sumMarks: '',
    sumOfMarks: '',
    weights: '',
    order: '',
  }
  for (var i = 0; i < solution.modMatrix.length; i++) {
    for (var j = 0; j < numOfEl; j++) {
      data.modMatrix[i] += solution.modMatrix[i][j] + ' '
    }
  }
  for (var i = 0; i < numOfEl; i++) {
    data.sumMarks += i + 1 + ': ' + solution.sumMarks[i]
    if (i + 1 !== solution.sumMarks.length) data.sumMarks += ' | '
  }
  for (var i = 0; i < numOfEl; i++) {
    data.weights += i + 1 + ': ' + solution.weights[i]
    if (i + 1 !== solution.weights.length) data.weights += ' | '
  }
  data.sumOfMarks = solution.sumOfMarks
  data.order = solution.order
  var str = ''
  str += 'Модифицированная матрица предпочтения: ' + '\n'
  for (var i = 0; i < data.modMatrix.length; i++) {
    str += data.modMatrix[i] + '\n'
  }
  str += 'Суммарные оценки предпочтения: ' + data.sumMarks + '\n'
  str += 'Сумма всех оценок: ' + data.sumOfMarks + '\n'
  str += 'Искомые веса целей: ' + data.weights + '\n'
  str += 'Порядок предпочтения целей: ' + data.order + '\n'
  return str
}

function kondorse(solution) {
  var str = ''
  str += 'Матрица оценок: ' + '\n'
  solution.modMatrix.map((arr, index) => {
    arr.map((item) => {
      str += item + '\t'
    })
    str += '\n'
  })
  str += 'Альтернатива Кондорсе: ' + solution.best + '\n'
  return str
}

function kemeniSnella(solution) {
  var str = ''
  str += 'Матрицы бинарных предпочтений: ' + '\n'
  solution.binaryMatrixArray.map((matrix, mIndex) => {
    str += 'Эксперт ' + (mIndex + 1) + '\n'
    matrix.map((arr) => {
      arr.map((item) => {
        str += item + '\t'
      })
      str += '\n'
    })
    str += '\n'
  })
  str += 'Матрица потерь: ' + '\n'
  solution.looseMatrix.map((arr) => {
    arr.map((item) => {
      str += item + '\t'
    })
    str += '\n'
  })
  str += '\n' + 'Результат: ' + solution.order
  return str
}

function stringGenerator(solution, method) {
  var result = ''
  switch (method) {
    case 'pairComparsion':
      result = pairComparsion(solution)
      break
    case 'sequentiallyComparison':
      result = sequentiallyComparison(solution)
      break
    case 'weighing':
      result = weighing(solution)
      break
    case 'preference':
      result = preference(solution)
      break
    case 'kondorse':
      result = kondorse(solution)
      break
    case 'kemeniSnella':
      result = kemeniSnella(solution)
      break
    default:
      result = 'error in generator, try again'
  }
  return result
}

export default stringGenerator
