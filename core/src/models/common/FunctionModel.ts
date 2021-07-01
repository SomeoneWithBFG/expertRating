export type IFuncResultModel<DataType> =
    | {
    value: DataType;
    error: undefined;
}
    | {
    value: undefined;
    error: Error;
}
