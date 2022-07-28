import create from "zustand";
import { ChatStatus } from "./const";

export type MessageId = string;
export type SenderId = string;
export type MessageContent = { type: number; content: string };
export type Timestamp = number;

export type Message = {
  id: MessageId;
  content: MessageContent;
  sender: SenderId;
  ts: Timestamp;
};

const initState = Object.freeze({
  name: "",
  chatStatus: ChatStatus.NOT_CONNECT,
  messages: [] as Message[],
  messagesIds: {} as { [k: MessageId]: Message },
});

const state = (set: (state: object) => void, get: () => any) => ({
  ...initState,
  setName: (name: string) => {
    if (!name) return;
    set({ name });
  },
  setChatStatus: (newStatus: ChatStatus) => set({ chatStatus: newStatus }),
  setMessages: (message: Message) => {
    const { messagesIds, messages } = get();
    if (messagesIds[message.id]) return;
    const newMessages = messages.slice();
    newMessages.push(message)
    set({
      messagesIds: { ...messagesIds, [message.id]: message },
      messages: newMessages,
    });
  },
  cleanUp: () => {
    set({ ...initState });
  },
});

type ChatStoreType = ReturnType<typeof state>;

export const useChatStore = create<ChatStoreType>(state);
