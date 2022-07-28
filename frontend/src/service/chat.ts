import { io } from "socket.io-client";

interface Socket {
  connect: () => void;
  disconnect: () => void;
  on: (evName: string, cb: (ev: any) => void) => void;
  off: (evName: string) => void;
  emit: (evName: string, data: any) => void;
}

const ChatSocket : Socket = io({
  path: "/chat",
  autoConnect: false,
  reconnection: true,
  transports: ["websocket", "polling"],
});

export { ChatSocket };
