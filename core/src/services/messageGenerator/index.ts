import { IMessageGenerator } from "./interfaces";

class MessageGenerator implements IMessageGenerator {
  createMessage(code: number, type: string, text: string) {
    return { code, type, text };
  }
}

export default new MessageGenerator();
