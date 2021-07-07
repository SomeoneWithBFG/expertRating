import { IMessageGenerator } from "./interfaces";

class MessageGenerator implements IMessageGenerator {
    createMessage(type: string, text: string) {
        return {type, text};
    }
}

export default new MessageGenerator();
