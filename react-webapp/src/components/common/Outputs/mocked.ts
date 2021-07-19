export const KemeniSnellaResult = {
    "result": {
        "method": "KemeniSnellaResult",
        "binaryMatrixArray": [
            [[0,-1,-1,-1],[1,0,1,-1],[1,-1,0,-1],[1,1,1,0]],
            [[0,-1,-1,-1],[1,0,1,-1],[1,-1,0,-1],[1,1,1,0]],
            [[0,-1,1,-1],[1,0,1,1],[-1,-1,0,-1],[1,-1,1,0]],
            [[0,-1,0,-1],[1,0,1,-1],[0,-1,0,-1], [1,1,1,0]],
            [[0,-1,-1,-1],[1,0,1,1],[1,-1,0,-1],[1,-1,1,0]]
        ],
        "looseMatrix": [
            [0,10,7,10],
            [0,0,0,6],
            [3,10,0,10],
            [0,4,0,0]
        ],
        "order": "4231"
    },
    "savedResult": {
        "method": "kemeniSnella",
        "inputMatrix": "[[4,2,3,1],[4,2,3,1],[3,1,4,2],[3,2,3,1],[4,1,3,2]]",
        "x": 4,
        "y": 5,
        "user": {
            "id": "01ef0c7e-8384-4781-8828-9f43f53bea00",
            "createdAt": "2021-07-15T09:50:20.494Z",
            "editedAt": "2021-07-15T09:50:20.494Z",
            "name": "test",
            "role": 0
        },
        "pairComparsionResult": null,
        "sequentiallyComparisonResult": null,
        "weighingResult": null,
        "preferenceResult": null,
        "kondorseResult": null,
        "kemeniSnellaResult": {
            "binaryMatrixArray": "[[[0,-1,-1,-1],[1,0,1,-1],[1,-1,0,-1],[1,1,1,0]],[[0,-1,-1,-1],[1,0,1,-1],[1,-1,0,-1],[1,1,1,0]],[[0,-1,1,-1],[1,0,1,1],[-1,-1,0,-1],[1,-1,1,0]],[[0,-1,0,-1],[1,0,1,-1],[0,-1,0,-1],[1,1,1,0]],[[0,-1,-1,-1],[1,0,1,1],[1,-1,0,-1],[1,-1,1,0]]]",
            "looseMatrix": "[[0,10,7,10],[0,0,0,6],[3,10,0,10],[0,4,0,0]]",
            "order": "4231",
            "id": "4a6eb7a0-80b6-4ae2-9423-9c6cdb9146e3",
            "createdAt": "2021-07-19T09:48:24.929Z",
            "editedAt": "2021-07-19T09:48:24.929Z"
        },
        "id": "70fb3f2e-dbd2-472c-ae77-50934f0713d7",
        "createdAt": "2021-07-19T09:48:24.949Z",
        "editedAt": "2021-07-19T09:48:24.949Z"
    }
}


export const KondorseResult = {
    "result": {
        "method": "KondorseResult",
        "modMatrix": [
            [15,3,3,4,5],
            [2,16,4,5,5],
            [2,1,10,3,4],
            [1,0,2,5,2],
            [0,0,1,3,4]
        ],
        "best": 1
    },
    "savedResult": {
        "method": "kondorse",
        "inputMatrix": "[[1,3,2,5,4],[1,2,4,3,5],[1,2,4,5,3],[3,1,2,5,4],[4,1,3,2,5]]",
        "x": 5,
        "y": 5,
        "user": {
            "id": "01ef0c7e-8384-4781-8828-9f43f53bea00",
            "createdAt": "2021-07-15T09:50:20.494Z",
            "editedAt": "2021-07-15T09:50:20.494Z",
            "name": "test",
            "role": 0
        },
        "pairComparsionResult": null,
        "sequentiallyComparisonResult": null,
        "weighingResult": null,
        "preferenceResult": null,
        "kondorseResult": {
            "modMatrix": "[[15,3,3,4,5],[2,16,4,5,5],[2,1,10,3,4],[1,0,2,5,2],[0,0,1,3,4]]",
            "best": 1,
            "id": "60ffa598-98fe-4746-b4cc-4351545e5bd9",
            "createdAt": "2021-07-19T09:56:02.800Z",
            "editedAt": "2021-07-19T09:56:02.800Z"
        },
        "kemeniSnellaResult": null,
        "id": "51ad7aa7-d045-47b1-97a3-c3f93839361e",
        "createdAt": "2021-07-19T09:56:02.816Z",
        "editedAt": "2021-07-19T09:56:02.816Z"
    }
}


export const PairComparsionResult = {
    "result": {
        "method": "PairComparsionResult",
        "values": [3,0,2,1],
        "sumOfValues": 6,
        "weights": [0.5,0,0.3333333333333333,0.16666666666666666],
        "order": "1 | 3 | 4 | 2 | "
    },
    "savedResult": {
        "method": "pairComparsion",
        "inputMatrix": "[[-100,1,1,1],[0,-100,0,0],[0,1,-100,1],[0,1,0,-100]]",
        "x": 4,
        "y": 4,
        "user": {
            "id": "01ef0c7e-8384-4781-8828-9f43f53bea00",
            "createdAt": "2021-07-15T09:50:20.494Z",
            "editedAt": "2021-07-15T09:50:20.494Z",
            "name": "test",
            "role": 0
        },
        "pairComparsionResult": {
            "values": "[3,0,2,1]",
            "sumOfValues": 6,
            "weights": "[0.5,0,0.3333333333333333,0.16666666666666666]",
            "order": "1 | 3 | 4 | 2 | ",
            "id": "c3bdac7a-c44c-4a37-83ef-94f45513429b",
            "createdAt": "2021-07-19T09:57:43.131Z",
            "editedAt": "2021-07-19T09:57:43.131Z"
        },
        "sequentiallyComparisonResult": null,
        "weighingResult": null,
        "preferenceResult": null,
        "kondorseResult": null,
        "kemeniSnellaResult": null,
        "id": "3f738e51-5cf5-43ff-a4ed-a8ce163b8ae5",
        "createdAt": "2021-07-19T09:57:43.146Z",
        "editedAt": "2021-07-19T09:57:43.146Z"
    }
}


export const PreferenceResult = {
    "result": {
        "method": "PreferenceResult",
        "modMatrix": [
            [5,3,4,0,1,2],
            [4,2,5,1,0,3],
            [0,0],
            [0,0],
            [0,0],
            [0,0]
        ],
        "sumMarks": [9,5,9,1,1,5],
        "sumOfMarks": 30,
        "weights": [
            0.3,
            0.1667,
            0.3,
            0.0333,
            0.0333,
            0.1667
        ],
        "order": "1 3 2 6 4 5 "
    },
    "savedResult": {
        "method": "preference",
        "inputMatrix": "[[1,3,2,6,5,4],[2,4,1,5,6,3]]",
        "x": 6,
        "y": 2,
        "user": {
            "id": "01ef0c7e-8384-4781-8828-9f43f53bea00",
            "createdAt": "2021-07-15T09:50:20.494Z",
            "editedAt": "2021-07-15T09:50:20.494Z",
            "name": "test",
            "role": 0
        },
        "pairComparsionResult": null,
        "sequentiallyComparisonResult": null,
        "weighingResult": null,
        "preferenceResult": {
            "modMatrix": "[[5,3,4,0,1,2],[4,2,5,1,0,3],[0,0],[0,0],[0,0],[0,0]]",
            "sumMarks": "[9,5,9,1,1,5]",
            "sumOfMarks": 30,
            "weights": "[0.3,0.1667,0.3,0.0333,0.0333,0.1667]",
            "order": "1 3 2 6 4 5 ",
            "id": "8b3ae5b4-6a7d-4920-849b-c4e3657afc25",
            "createdAt": "2021-07-19T09:59:12.903Z",
            "editedAt": "2021-07-19T09:59:12.903Z"
        },
        "kondorseResult": null,
        "kemeniSnellaResult": null,
        "id": "c60e8ce4-1072-4c6e-aeb5-ff502f07c9c4",
        "createdAt": "2021-07-19T09:59:12.918Z",
        "editedAt": "2021-07-19T09:59:12.918Z"
    }
}


export const SequentiallyComparisonResult = {
    "result": {
        "method": "SequentiallyComparisonResult",
        "causedCorrections": "z1 <=> (z3&z4)\n",
        "correctedEvaluations": [125,60,40,10],
        "sumOfWeights": 235,
        "weights": [
            0.5319148936170213,
            0.2553191489361702,
            0.1702127659574468,
            0.0425531914893617
        ],
        "order": "z1 z3 z4 z2 "
    },
    "savedResult": {
        "method": "sequentiallyComparison",
        "inputMatrix": "[{\"index\":\"z1\",\"weight\":125,\"resultWeight\":0.5319148936170213},{\"index\":\"z3\",\"weight\":60,\"resultWeight\":0.2553191489361702},{\"index\":\"z4\",\"weight\":40,\"resultWeight\":0.1702127659574468},{\"index\":\"z2\",\"weight\":10,\"resultWeight\":0.0425531914893617}]",
        "x": 4,
        "y": 4,
        "user": {
            "id": "01ef0c7e-8384-4781-8828-9f43f53bea00",
            "createdAt": "2021-07-15T09:50:20.494Z",
            "editedAt": "2021-07-15T09:50:20.494Z",
            "name": "test",
            "role": 0
        },
        "pairComparsionResult": null,
        "sequentiallyComparisonResult": {
            "causedCorrections": "z1 <=> (z3&z4)\n",
            "correctedEvaluations": "[125,60,40,10]",
            "sumOfWeights": 235,
            "weights": "[0.5319148936170213,0.2553191489361702,0.1702127659574468,0.0425531914893617]",
            "order": "z1 z3 z4 z2 ",
            "id": "4279fece-bfe5-4373-921c-52295b0ae866",
            "createdAt": "2021-07-19T10:01:16.512Z",
            "editedAt": "2021-07-19T10:01:16.512Z"
        },
        "weighingResult": null,
        "preferenceResult": null,
        "kondorseResult": null,
        "kemeniSnellaResult": null,
        "id": "83de6247-b2bb-42c8-94e8-d9445be04f1d",
        "createdAt": "2021-07-19T10:01:16.524Z",
        "editedAt": "2021-07-19T10:01:16.524Z"
    }
}


export const WeighingResult = {
    "result": {
        "method": "WeighingResult",
        "sumOfMarks": 1.04,
        "relativeExpertsMarks": [
            0.4807692307692307,
            0.5192307692307693
        ],
        "weights": [
            0.020769230769230772,
            0.28846153846153844,
            0.17
        ],
        "order": "2 3 1 "
    },
    "savedResult": {
        "method": "weighing",
        "inputMatrix": "[[0.5,0,0.33,0.17],[0.54,0.04,0.25,0.17]]",
        "x": 4,
        "y": 2,
        "user": {
            "id": "01ef0c7e-8384-4781-8828-9f43f53bea00",
            "createdAt": "2021-07-15T09:50:20.494Z",
            "editedAt": "2021-07-15T09:50:20.494Z",
            "name": "test",
            "role": 0
        },
        "pairComparsionResult": null,
        "sequentiallyComparisonResult": null,
        "weighingResult": {
            "sumOfMarks": 1.04,
            "relativeExpertsMarks": "[0.4807692307692307,0.5192307692307693]",
            "weights": "[0.020769230769230772,0.28846153846153844,0.17]",
            "order": "2 3 1 ",
            "id": "ed974637-8bf2-47d3-9b8c-1831b2924348",
            "createdAt": "2021-07-19T10:02:32.303Z",
            "editedAt": "2021-07-19T10:02:32.303Z"
        },
        "preferenceResult": null,
        "kondorseResult": null,
        "kemeniSnellaResult": null,
        "id": "eaf125b9-8ffd-4974-9714-0d80398b3290",
        "createdAt": "2021-07-19T10:02:32.318Z",
        "editedAt": "2021-07-19T10:02:32.318Z"
    }
}
