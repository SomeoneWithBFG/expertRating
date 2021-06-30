import algorithms from "./algorithms"

function createMatrix(y, x, oldMatrix) {
    var m = new Array(y)
    for (var i = 0; i < y; i++) {
        m[i] = new Array(x);
        m[i].fill(0);
    }
    if (oldMatrix) {
        for (var i = 0; i < oldMatrix.length; i++) {
            for (var j = 0; j < oldMatrix[i].length; j++) {
                m[i][j] = oldMatrix[i][j]
            }
        }
    }
    return m;
}

export const state = () => {
  return {
    x: 2,
    y: 2,
    inputMatrix: createMatrix(10, 10),
  };
};

export const getters = {
    getX: state => {
        return state.x;
    },
    getY: state => {
        return state.y;
    },
    getInputMatrix: state => {
        return state.inputMatrix;
    },
    solve: state => method => {
        var objToReturn;
        switch(method) {
            case "pairComparsion": 
                for (var i = 0; i < state.x; i++) {
                    state.inputMatrix[i][i] = 0;
                }
                objToReturn = algorithms.pairComparsion(state.inputMatrix, state.x, state.y); 
                break;
            case "sequentiallyComparison": 
                objToReturn = algorithms.sequentiallyComparison(state.inputMatrix, state.x, state.y); 
                break;
            case "weighing": 
                objToReturn = algorithms.weighing(state.inputMatrix, state.x, state.y); 
                break;
            case "preference": 
                objToReturn = algorithms.preference(state.inputMatrix, state.x, state.y); 
                break;
            case "kondorse": 
                objToReturn = algorithms.kondorse(state.inputMatrix, state.x, state.y); 
                break;
            case "kemeniSnella": 
                objToReturn = algorithms.kemeniSnella(state.inputMatrix, state.x, state.y); 
                break;

        }
        return objToReturn;
    },
};

export const mutations = {
    changeMartixSize(state) {
        state.inputMatrix = createMatrix(state.x, state.y, state.inputMatrix);
    },
    changeX(state, x) {
        state.x = x;
    },
    changeY(state, y) {
        state.y = y;
    },
    setMatrixElement(state, payload) {
        state.inputMatrix[payload.x][payload.y] = payload.value;
    },
};
