import { ICalculations } from './interfaces'
import {
    SequentiallyComparisonInputMatrix,
    SequentiallyComparisonResult,
    WeighingResult,
    PreferenceResult,
    KemeniSnellaResult,
} from "@src/models/dtm/calculations"

function createMatrix(y: number, x: number) {
    var m = new Array(y)
    for (var i = 0; i < y; i++) {
        m[i] = new Array(x);
        m[i].fill(0);
    }
    return m;
}

class Calculations implements ICalculations {
    pairComparsion (binaryMatrix: number[][], x: number, y: number) {
        var numOfEl = x;
        var objToReturn = {
            values: Array(x).fill(0),
            sumOfValues: 0,
            weights: Array(x).fill(0),
            order: "",
        };
        for (var i = 0; i < numOfEl; i++) {
            for (var j = 0; j < numOfEl; j++) {
                if (binaryMatrix[i][j] >= 0)
                    objToReturn.values[i] += binaryMatrix[i][j];
            }
        }
        for (var i = 0; i < numOfEl; i++) {
            objToReturn.sumOfValues += objToReturn.values[i];
        }
        for (var i = 0; i < numOfEl; i++) {
            objToReturn.weights[i] = objToReturn.values[i] * 1.0 / objToReturn.sumOfValues;
        }
        var foo = Array(objToReturn.weights.length);
        for (var i = 0; i < objToReturn.weights.length; i++) {
            foo[i] = objToReturn.weights[i];
        }
        for (var i = 0; i < foo.length; i++) {
            var max = -1, maxIndex = -1;
            for (var j = 0; j < foo.length; j++) {
                if (max < foo[j]) {
                    max = foo[j];
                    maxIndex = j;
                }
            }
            objToReturn.order += maxIndex + 1 + " | ";
            foo[maxIndex] = -1;
        }
        console.log(objToReturn)
        return objToReturn;
    }
    sequentiallyComparison (inputMatrix: SequentiallyComparisonInputMatrix, x: number, y: number) {
        var rawEvaluations = [];
        for (var i = 0; i < y; i++) {
            rawEvaluations.push(inputMatrix[i]);
        }
        var objToReturn: SequentiallyComparisonResult;
        objToReturn = {
            causedCorrections: "",
            correctedEvaluations: [],
            sumOfWeights: 0,
            weights: [],
            order: "",
        };
        var numOfEl = y;
        var weightToAdd = 25;
        for (var i = 0; i < numOfEl - 2; i++) {
            if (rawEvaluations[i].weight <= (rawEvaluations[i + 1].weight + rawEvaluations[i + 2].weight)) {
                rawEvaluations[i].weight += 
                    rawEvaluations[i].weight - (rawEvaluations[i + 1].weight + rawEvaluations[i + 2].weight) + weightToAdd;
                objToReturn.causedCorrections += rawEvaluations[i].index + " <=> (" + rawEvaluations[i+1].index + "&" + rawEvaluations[i+2].index + ")\n"
            }
        }
        for (var i = 0; i < numOfEl; i++) {
            objToReturn.correctedEvaluations.push(rawEvaluations[i].weight);
            objToReturn.order += rawEvaluations[i].index + " "
        }
        var sumOfWeights = 0;
        for (var i = 0; i < numOfEl; i++) {
            sumOfWeights += rawEvaluations[i].weight;
        }
        objToReturn.sumOfWeights = sumOfWeights;
        for (var i = 0; i < numOfEl; i++) {
            rawEvaluations[i].resultWeight += rawEvaluations[i].weight / sumOfWeights;
        }
        rawEvaluations.map((item, index) => {
            objToReturn.weights.push(item.resultWeight);
        })
        return objToReturn;
    }
    weighing (inputMatrix: number[][], x: number, y: number) {
        var numOfEl = x - 1
        var arr = createMatrix(y, numOfEl);
        for (var i = 0; i < y; i++) {
            for (var j = 1; j < numOfEl+1; j++) {
                arr[i][j-1] = inputMatrix[i][j];
            }
        }
        var expertsMarks = Array(y).fill(0);
        for (var i = 0; i < y; i++) {
            expertsMarks[i] = inputMatrix[i][0];
        }
        var objToReturn: WeighingResult;
        objToReturn = {
            sumOfMarks: 0,
            relativeExpertsMarks: [],
            weights: [],
            order: "",
        }
        var outputArray = [];
        var sumOfMarks = 0;
        var relativeExpertsMarks = [];
        for (var i = 0; i < y; i++) {
            sumOfMarks += expertsMarks[i];
        }
        objToReturn.sumOfMarks = sumOfMarks;
        for (var i = 0; i < y; i++) {
            relativeExpertsMarks[i] = expertsMarks[i] / sumOfMarks;
        }
        objToReturn.relativeExpertsMarks = relativeExpertsMarks;
        for (var i = 0; i < numOfEl; i++) {
            outputArray[i] = 0;
        }
        for (var i = 0; i < numOfEl; i++) {
            for (var j = 0; j < y; j++) {
                outputArray[i] += arr[j][i] * relativeExpertsMarks[j];
            }
        }
        objToReturn.weights = outputArray;
        var foo = Array(objToReturn.weights.length);
        for (var i = 0; i < objToReturn.weights.length; i++) {
            foo[i] = objToReturn.weights[i];
        }
        for (var i = 0; i < foo.length; i++) {
            var max = -1, maxIndex = -1;
            for (var j = 0; j < foo.length; j++) {
                if (max < foo[j]) {
                    max = foo[j]
                    maxIndex = j
                }
            }
            objToReturn.order += maxIndex + 1 + " "
            foo[maxIndex] = -1;
        }
        return objToReturn;
    }
    preference (inputMatrix: number[][], x: number, y: number) {
        var objToReturn: PreferenceResult;
        objToReturn = {
            modMatrix: createMatrix(y, x),
            sumMarks: Array(x).fill(0),
            sumOfMarks: 0,
            weights: Array(x),
            order: "",
        }
        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                objToReturn.modMatrix[j][i] = 6 - inputMatrix[j][i];
            }
        }
        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                objToReturn.sumMarks[i] += objToReturn.modMatrix[j][i];
            }
        }
        for (var i = 0; i < x; i++) {
            objToReturn.sumOfMarks += objToReturn.sumMarks[i];
        }
        for (var i = 0; i < x; i++) {
            objToReturn.weights[i] = parseFloat((objToReturn.sumMarks[i] / objToReturn.sumOfMarks).toFixed(4));
        }
        var foo: number[]
        foo = []
        for (var i = 0; i < x; i++) {
            foo[i] = objToReturn.weights[i];
        }
        for (var i = 0; i < foo.length; i++) {
            var max = -1, maxIndex = -1;
            for (var j = 0; j < foo.length; j++) {
                if (max < foo[j]) {
                    max = foo[j]
                    maxIndex = j
                }
            }
            objToReturn.order += maxIndex + 1 + " "
            foo[maxIndex] = -1;
        }
        return objToReturn;
    }
    kondorse (inputMatrix: number[][], x: number, y: number) {
        var objToReturn = {
            modMatrix: createMatrix(x, x),
            best: 0,
        }
        for (var i = 0; i < x; i++) {
            for (var j = 0; j < x; j++) {
                objToReturn.modMatrix[i][j] = 0;
            }
        }
        for (var i = 0; i < y; i++) {
            for (var j = 0; j < x; j++) {
                for (var k = j+1; k < x; k++) {
                    if (inputMatrix[i][j] < inputMatrix[i][k])
                        objToReturn.modMatrix[j][k]++;
                    else
                        objToReturn.modMatrix[k][j]++;
                }
            }
        }
        for (var i = 0; i < x; i++) {
            var sum = 0;
            for (var j = 0; j < x; j++) {
                sum += objToReturn.modMatrix[i][j];
            }
            objToReturn.modMatrix[i][i] = sum;
        }
        for (var i = 0; i < x; i++) {
            var res = 0;
            for (var j = 0; j < x; j++) {
                if (objToReturn.modMatrix[i][j] > objToReturn.modMatrix[j][i])
                    res++;
            }
            if (res == x-1)
                objToReturn.best = i + 1
        }
        return objToReturn;
    }
    kemeniSnella (inputMatrix: number[][], x: number, y: number) {
        var numOfExperts = y;
        var numOfProjects = x;
        var objToReturn: KemeniSnellaResult;
        objToReturn = {
            binaryMatrixArray: [],
            looseMatrix: [],
            order: "",
        };
        var binaryMatrixArray = Array(numOfExperts);
        for (var i = 0; i < numOfExperts; i++) { 
            binaryMatrixArray[i] = createMatrix(numOfProjects, numOfProjects)
        }
        for (var k = 0; k < numOfExperts; k++) {
            for (var i = 0; i < numOfProjects; i++) {
                for (var j = 0; j < numOfProjects; j++) {
                    if (inputMatrix[k][i] < inputMatrix[k][j]) {
                        binaryMatrixArray[k][i][j] = 1;
                        binaryMatrixArray[k][j][i] = -1;
                    }
                    else if (inputMatrix[k][i] > inputMatrix[k][j]) {
                        binaryMatrixArray[k][i][j] = -1;
                        binaryMatrixArray[k][j][i] = 1;
                    }
                    else {
                        binaryMatrixArray[k][i][j] = 0;
                        binaryMatrixArray[k][j][i] = 0;
                    }
                }
            }
        }
        objToReturn.binaryMatrixArray = binaryMatrixArray;
        var looseMatrix = createMatrix(numOfProjects, numOfProjects);
        for (var i = 0; i < numOfProjects; i++) {
            for (var j = 0; j < numOfProjects; j++) {
                for (var k = 0; k < numOfExperts; k++) {
                    if (i != j) {
                        if (binaryMatrixArray[k][i][j] == -1)
                            looseMatrix[i][j] += 2;
                        else if (binaryMatrixArray[k][i][j] == 0)
                            looseMatrix[i][j]++;
                    }
                }
            }
        }
        objToReturn.looseMatrix = looseMatrix;
        var res = Array(numOfProjects).fill(-1);
        for (var k = 0; k < numOfProjects; k++) {
            var min = 9999999999999;
            var sum = Array(numOfProjects).fill(0);
            for (var i = 0; i < numOfProjects; i++) {
                for (var j = 0; j < numOfProjects; j++) {
                    var check = true;
                    for (var iter = 0; iter < numOfProjects; iter++) {
                        if (res[iter] == i || res[iter] == j)
                            check = false;
                    }
                    if (i != j && check)
                        sum[i] += looseMatrix[i][j];
                }
            }
            for (var i = 0; i < numOfProjects; i++) {
                var check = true;
                for (var iter = 0; iter < numOfProjects; iter++) {
                    if (res[iter] == i)
                        check = false;
                }
                if (check && min > sum[i]) {
                    min = sum[i];
                    res[k] = i;
                }
            }
        }
        var resultString = ""
        for (var i = 0; i < numOfProjects; i++) {
            res[i]++;
            resultString += res[i];
        }
        objToReturn.order = resultString;
        return objToReturn;
    }
}

export default new Calculations();
