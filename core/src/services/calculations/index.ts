import { ICalculationsService } from "./interfaces";
import {
  SequentiallyComparisonInputMatrixElement,
  SequentiallyComparisonResult,
  WeighingResult,
  PreferenceResult,
  KemeniSnellaResult,
} from "@src/models/dtm/calculations";

function createMatrix(y: number, x: number) {
  return Array.from({ length: x }, () => Array.from({ length: y }, () => 0));
}

class CalculationsService implements ICalculationsService {
  pairComparsion(binaryMatrix: number[][], numOfEl: number, y: number) {
    let result = {
      values: Array(numOfEl).fill(0),
      sumOfValues: 0,
      weights: Array(numOfEl).fill(0),
      order: "",
    };
    for (let i = 0; i < numOfEl; i++) {
      for (let j = 0; j < numOfEl; j++) {
        if (binaryMatrix[i][j] >= 0) result.values[i] += binaryMatrix[i][j];
      }
    }
    for (let i = 0; i < numOfEl; i++) {
      result.sumOfValues += result.values[i];
    }
    for (let i = 0; i < numOfEl; i++) {
      result.weights[i] = result.values[i] / result.sumOfValues;
    }
    let foo = Array(result.weights.length);
    for (let i = 0; i < result.weights.length; i++) {
      foo[i] = result.weights[i];
    }
    for (let i = 0; i < foo.length; i++) {
      let max = -1,
        maxIndex = -1;
      for (let j = 0; j < foo.length; j++) {
        if (max < foo[j]) {
          max = foo[j];
          maxIndex = j;
        }
      }
      result.order += maxIndex + 1 + " | ";
      foo[maxIndex] = -1;
    }
    return result;
  }
  sequentiallyComparison(
    inputMatrix: SequentiallyComparisonInputMatrixElement[],
    x: number,
    numOfEl: number
  ) {
    let rawEvaluations = [];
    for (let i = 0; i < numOfEl; i++) {
      rawEvaluations.push(inputMatrix[i]);
    }
    let result: SequentiallyComparisonResult;
    result = {
      causedCorrections: "",
      correctedEvaluations: [],
      sumOfWeights: 0,
      weights: [],
      order: "",
    };
    let weightToAdd = 25;
    for (let i = 0; i < numOfEl - 2; i++) {
      if (
        rawEvaluations[i].weight <=
        rawEvaluations[i + 1].weight + rawEvaluations[i + 2].weight
      ) {
        rawEvaluations[i].weight +=
          rawEvaluations[i].weight -
          (rawEvaluations[i + 1].weight + rawEvaluations[i + 2].weight) +
          weightToAdd;
        result.causedCorrections +=
          rawEvaluations[i].index +
          " <=> (" +
          rawEvaluations[i + 1].index +
          "&" +
          rawEvaluations[i + 2].index +
          ")\n";
      }
    }
    for (let i = 0; i < numOfEl; i++) {
      result.correctedEvaluations.push(rawEvaluations[i].weight);
      result.order += rawEvaluations[i].index + " ";
    }
    let sumOfWeights = 0;
    for (let i = 0; i < numOfEl; i++) {
      sumOfWeights += rawEvaluations[i].weight;
    }
    result.sumOfWeights = sumOfWeights;
    for (let i = 0; i < numOfEl; i++) {
      rawEvaluations[i].resultWeight += rawEvaluations[i].weight / sumOfWeights;
    }
    rawEvaluations.map((item, index) => {
      result.weights.push(item.resultWeight);
    });
    return result;
  }
  weighing(inputMatrix: number[][], x: number, y: number) {
    let numOfEl = x - 1;
    let arr = createMatrix(y, numOfEl);
    for (let i = 0; i < y; i++) {
      for (let j = 1; j < numOfEl + 1; j++) {
        arr[i][j - 1] = inputMatrix[i][j];
      }
    }
    let expertsMarks = Array(y).fill(0);
    for (let i = 0; i < y; i++) {
      expertsMarks[i] = inputMatrix[i][0];
    }
    let result: WeighingResult;
    result = {
      sumOfMarks: 0,
      relativeExpertsMarks: [],
      weights: [],
      order: "",
    };
    let outputArray = [];
    let sumOfMarks = 0;
    let relativeExpertsMarks = [];
    for (let i = 0; i < y; i++) {
      sumOfMarks += expertsMarks[i];
    }
    result.sumOfMarks = sumOfMarks;
    for (let i = 0; i < y; i++) {
      relativeExpertsMarks[i] = expertsMarks[i] / sumOfMarks;
    }
    result.relativeExpertsMarks = relativeExpertsMarks;
    for (let i = 0; i < numOfEl; i++) {
      outputArray[i] = 0;
    }
    for (let i = 0; i < numOfEl; i++) {
      for (let j = 0; j < y; j++) {
        outputArray[i] += arr[j][i] * relativeExpertsMarks[j];
      }
    }
    result.weights = outputArray;
    let foo = Array(result.weights.length);
    for (let i = 0; i < result.weights.length; i++) {
      foo[i] = result.weights[i];
    }
    for (let i = 0; i < foo.length; i++) {
      let max = -1,
        maxIndex = -1;
      for (let j = 0; j < foo.length; j++) {
        if (max < foo[j]) {
          max = foo[j];
          maxIndex = j;
        }
      }
      result.order += maxIndex + 1 + " ";
      foo[maxIndex] = -1;
    }
    return result;
  }
  preference(inputMatrix: number[][], x: number, y: number) {
    let result: PreferenceResult;
    result = {
      modMatrix: createMatrix(y, x),
      sumMarks: Array(x).fill(0),
      sumOfMarks: 0,
      weights: Array(x),
      order: "",
    };
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        result.modMatrix[j][i] = 6 - inputMatrix[j][i];
      }
    }
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        result.sumMarks[i] += result.modMatrix[j][i];
      }
    }
    for (let i = 0; i < x; i++) {
      result.sumOfMarks += result.sumMarks[i];
    }
    for (let i = 0; i < x; i++) {
      result.weights[i] = parseFloat(
        (result.sumMarks[i] / result.sumOfMarks).toFixed(4)
      );
    }
    let foo: number[] = [];
    for (let i = 0; i < x; i++) {
      foo[i] = result.weights[i];
    }
    for (let i = 0; i < foo.length; i++) {
      let max = -1,
        maxIndex = -1;
      for (let j = 0; j < foo.length; j++) {
        if (max < foo[j]) {
          max = foo[j];
          maxIndex = j;
        }
      }
      result.order += maxIndex + 1 + " ";
      foo[maxIndex] = -1;
    }
    return result;
  }
  kondorse(inputMatrix: number[][], x: number, y: number) {
    let result = {
      modMatrix: createMatrix(x, x),
      best: 0,
    };
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < x; j++) {
        result.modMatrix[i][j] = 0;
      }
    }
    for (let i = 0; i < y; i++) {
      for (let j = 0; j < x; j++) {
        for (let k = j + 1; k < x; k++) {
          if (inputMatrix[i][j] < inputMatrix[i][k]) result.modMatrix[j][k]++;
          else result.modMatrix[k][j]++;
        }
      }
    }
    for (let i = 0; i < x; i++) {
      let sum = 0;
      for (let j = 0; j < x; j++) {
        sum += result.modMatrix[i][j];
      }
      result.modMatrix[i][i] = sum;
    }
    for (let i = 0; i < x; i++) {
      let res = 0;
      for (let j = 0; j < x; j++) {
        if (result.modMatrix[i][j] > result.modMatrix[j][i]) res++;
      }
      if (res === x - 1) result.best = i + 1;
    }
    return result;
  }
  kemeniSnella(
    inputMatrix: number[][],
    numOfProjects: number,
    numOfExperts: number
  ) {
    let result: KemeniSnellaResult;
    result = {
      binaryMatrixArray: [],
      looseMatrix: [],
      order: "",
    };
    let binaryMatrixArray = Array(numOfExperts);
    for (let i = 0; i < numOfExperts; i++) {
      binaryMatrixArray[i] = createMatrix(numOfProjects, numOfProjects);
    }
    for (let k = 0; k < numOfExperts; k++) {
      for (let i = 0; i < numOfProjects; i++) {
        for (let j = 0; j < numOfProjects; j++) {
          if (inputMatrix[k][i] < inputMatrix[k][j]) {
            binaryMatrixArray[k][i][j] = 1;
            binaryMatrixArray[k][j][i] = -1;
          } else if (inputMatrix[k][i] > inputMatrix[k][j]) {
            binaryMatrixArray[k][i][j] = -1;
            binaryMatrixArray[k][j][i] = 1;
          } else {
            binaryMatrixArray[k][i][j] = 0;
            binaryMatrixArray[k][j][i] = 0;
          }
        }
      }
    }
    result.binaryMatrixArray = binaryMatrixArray;
    let looseMatrix = createMatrix(numOfProjects, numOfProjects);
    for (let i = 0; i < numOfProjects; i++) {
      for (let j = 0; j < numOfProjects; j++) {
        for (let k = 0; k < numOfExperts; k++) {
          if (i !== j) {
            if (binaryMatrixArray[k][i][j] === -1) looseMatrix[i][j] += 2;
            else if (binaryMatrixArray[k][i][j] === 0) looseMatrix[i][j]++;
          }
        }
      }
    }
    result.looseMatrix = looseMatrix;
    let res = Array(numOfProjects).fill(-1);
    for (let k = 0; k < numOfProjects; k++) {
      let min = 9999999999999;
      let sum = Array(numOfProjects).fill(0);
      for (let i = 0; i < numOfProjects; i++) {
        for (let j = 0; j < numOfProjects; j++) {
          let check = true;
          for (let iter = 0; iter < numOfProjects; iter++) {
            if (res[iter] === i || res[iter] === j) check = false;
          }
          if (i !== j && check) sum[i] += looseMatrix[i][j];
        }
      }
      for (let i = 0; i < numOfProjects; i++) {
        let check = true;
        for (let iter = 0; iter < numOfProjects; iter++) {
          if (res[iter] === i) check = false;
        }
        if (check && min > sum[i]) {
          min = sum[i];
          res[k] = i;
        }
      }
    }
    let resultString = "";
    for (let i = 0; i < numOfProjects; i++) {
      res[i]++;
      resultString += res[i];
    }
    result.order = resultString;
    return result;
  }
}

export default new CalculationsService();
