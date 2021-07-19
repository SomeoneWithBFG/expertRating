export interface IMessageGenerator {
    createMessage: (
        code: number,
        type: string,
        text: string
    ) => { type: string; text: string }
}
