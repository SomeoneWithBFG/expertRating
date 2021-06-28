#include <iostream>
#include <string>

using namespace std;
  
void PairComparsion() {
    int binaryMatrix[4][4] = { 
        {-100, 1, 1, 1}, 
        {0, -100, 0, 0}, 
        {0, 1, -100, 1}, 
        {0, 1, 0, -100} 
    };
    int values[5] = { 0, 0, 0, 0 };
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            if (binaryMatrix[i][j] >= 0)
                values[i] += binaryMatrix[i][j];
        }
    }
    int sumOfValues = 0;
    for (int i = 0; i < 4; i++) {
        sumOfValues += values[i];
    }
    double weights[5] = { 0 , 0, 0, 0 };
    for (int i = 0; i < 4; i++) {
        weights[i] = values[i] * 1.0 / sumOfValues;
    }
    for (int i = 0; i < 4; i++) {
        cout << weights[i] << "\t";
    }
    cout << endl;
}

void sequentiallyComparison() {
    struct element {
        string name;
        int weight;
        float resultWeight;
    };
    int numOfEl = 4;
    int weightToAdd = 25;
    element rawEvaluations[4] = { 
        {"z1", 100, 0}, 
        {"z3", 60, 0}, 
        {"z4", 40, 0}, 
        {"z2", 10, 0} 
    };
    for (int i = 0; i < numOfEl - 2; i++) {
        if (rawEvaluations[i].weight <= (rawEvaluations[i + 1].weight + rawEvaluations[i + 2].weight)) {
            rawEvaluations[i].weight += 
                rawEvaluations[i].weight - (rawEvaluations[i + 1].weight + rawEvaluations[i + 2].weight) + weightToAdd;
        }
    }
    double sumOfWeights = 0;
    for (int i = 0; i < numOfEl; i++) {
        sumOfWeights += rawEvaluations[i].weight;
    }
    for (int i = 0; i < numOfEl; i++) {
        rawEvaluations[i].resultWeight += rawEvaluations[i].weight / sumOfWeights;
        cout << rawEvaluations[i].name << "\t" << rawEvaluations[i].resultWeight << endl;
    }
}

void weighing() {
    float arr[2][4] = { 
        { 0.5, 0, 0.33, 0.17}, 
        { 0.54, 0.04, 0.25, 0.17} 
    };
    float outputArray[4];
    float expertsMarks[3] = { 4.5, 8 };
    float sumOfMarks = 0;
    float relativeExpertsMarks[2];
    for (int i = 0; i < 2; i++) {
        sumOfMarks += expertsMarks[i];
    }
    for (int i = 0; i < 2; i++) {
        relativeExpertsMarks[i] = expertsMarks[i] / sumOfMarks;
        cout << relativeExpertsMarks[i] << endl;
    }
    for (int i = 0; i < 4; i++) {
        outputArray[i] = 0;
    }
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 2; j++) {
            outputArray[i] += arr[j][i] * relativeExpertsMarks[j];
        }
    }
    for (int i = 0; i < 4; i++) {
        cout << outputArray[i] << endl;
    }
}

void preference() {
    int inputArray[2][6] = {
        { 1, 3, 2, 6, 5, 4},
        { 2, 4, 1, 5, 6, 3}
    };
    int modMatrix[2][6];
    for (int i = 0; i < 6; i++) {
        for (int j = 0; j < 2; j++) {
            modMatrix[j][i] = 6 - inputArray[j][i];
        }
    }
    float outputArray[6];
    for (int i = 0; i < 6; i++) {
        outputArray[i] = 0;
    }
    for (int i = 0; i < 6; i++) {
        for (int j = 0; j < 2; j++) {
            outputArray[i] += modMatrix[j][i];
        }
    }
    int sumOfWeights = 0;
    for (int i = 0; i < 6; i++) {
        sumOfWeights += outputArray[i];
    }
    for (int i = 0; i < 6; i++) {
        outputArray[i] = outputArray[i] / sumOfWeights;
    }
    for (int i = 0; i < 6; i++) {
        cout << outputArray[i] << "\t";
    }
    cout << endl;
}

void kondorse() {
    int inputArray[5][5] = {
        { 1, 3, 2, 5, 4},
        { 1, 2, 4, 3, 5},
        { 1, 2, 4, 5, 3},
        { 3, 1, 2, 5, 4},
        { 4, 1, 3, 2, 5}
    };
    int modMatrix[5][5];
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            modMatrix[i][j] = 0;
        }
    }
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            for (int k = j+1; k < 5; k++) {
                if (inputArray[i][j] < inputArray[i][k])
                    modMatrix[j][k]++;
                else
                    modMatrix[k][j]++;
            }
        }
    }
    for (int i = 0; i < 5; i++) {
        int sum = 0;
        for (int j = 0; j < 5; j++) {
            sum += modMatrix[i][j];
        }
        modMatrix[i][i] = sum;
    }
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            cout << modMatrix[i][j] << "\t";
        }
        cout << endl;
    }
    for (int i = 0; i < 5; i++) {
        int res = 0;
        for (int j = 0; j < 5; j++) {
            if (modMatrix[i][j] > modMatrix[j][i])
                res++;
        }
        if (res == 4)
            cout << "best is: " << i + 1;
    }
    cout << endl;
}

void kemeniSnella() {
    int inputArray[5][4] = {
        { 4, 2, 3, 1},
        { 4, 2, 3, 1},
        { 3, 1, 4, 2},
        { 3, 2, 3, 1},
        { 4, 1, 3, 2}
    };
    int binaryMatrixArray[5][4][4];
    for (int k = 0; k < 5; k++) {
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                if (inputArray[k][i] < inputArray[k][j]) {
                    binaryMatrixArray[k][i][j] = 1;
                    binaryMatrixArray[k][j][i] = -1;
                }
                else if (inputArray[k][i] > inputArray[k][j]) {
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
    int looseMatrix[4][4];
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            looseMatrix[i][j] = 0;
        }
    }
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            for (int k = 0; k < 5; k++) {
                if (i != j) {
                    if (binaryMatrixArray[k][i][j] == -1)
                        looseMatrix[i][j] += 2;
                    else if (binaryMatrixArray[k][i][j] == 0)
                        looseMatrix[i][j]++;
                }
            }
        }
    }
    int res[4] = { -1, -1, -1, -1 };
    for (int k = 0; k < 4; k++) {
        int min = 999999;
        int sum[4] = { 0, 0, 0, 0 };
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                bool check = true;
                for (int iter = 0; iter < 4; iter++) {
                    if (res[iter] == i || res[iter] == j)
                        check = false;
                }
                if (i != j && check)
                    sum[i] += looseMatrix[i][j];
            }
        }
        for (int i = 0; i < 4; i++) {
            bool check = true;
            for (int iter = 0; iter < 4; iter++) {
                if (res[iter] == i)
                    check = false;
            }
            if (check && min > sum[i]) {
                min = sum[i];
                res[k] = i;
            }
        }
    }
    for (int i = 0; i < 4; i++) {
        cout << res[i] + 1 << "\t";
    }
}

int main() {
    cout << "PairComparsion" << endl;
    PairComparsion();
    cout << endl << "sequentiallyComparison" << endl;
    sequentiallyComparison();
    cout << endl << "weighing" << endl;
    weighing();
    cout << endl << "preference" << endl;
    preference();
    cout << endl << "kondorse" << endl;
    kondorse();
    cout << endl << "kemeniSnella" << endl;
    kemeniSnella();
}
