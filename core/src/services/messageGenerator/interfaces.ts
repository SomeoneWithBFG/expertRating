export interface IMessageGenerator {
    createMessage: 
        (type: string, text: string) => {type: string, text: string};
}
