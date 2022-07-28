import { useToast } from "@chakra-ui/react";
import { ChatSocket } from "service/chat";
import { Message, useChatStore } from "state/chatStore";
import { ChatStatus } from "state/const";

export function useInitChatService() {
  const setChatStatus = useChatStore((state) => state.setChatStatus);
  const setName = useChatStore((state) => state.setName);
  const setMessage = useChatStore((state) => state.setMessages);

  const toast = useToast();

  const joinChatroom = () => {
    ChatSocket.connect();
    setChatStatus(ChatStatus.CONNECTING);
    ChatSocket.on("connect", () => {
      setChatStatus(ChatStatus.CONNECTED);
    });
    ChatSocket.on("setname", (ev) => {
      setName(ev);
      toast({
        title: "Connected to chat",
        description: `Your name is ${ev}`,
        position: "bottom",
        duration: 5000,
        isClosable: true,
        status: "success",
      });
    });
    ChatSocket.on("message", (ev: Message) => {
      setMessage(ev);
    });

    ChatSocket.on("disconnect", () => {
      setChatStatus(ChatStatus.NOT_CONNECT);
      ChatSocket.off("connect");
      ChatSocket.off("broadcastmessage");
      ChatSocket.off("setname");
      ChatSocket.off("disconnect");
      setName("");
      toast({
        title: "Disconnected to chat",
        description: `You are now disconnect to chatroom`,
        position: "bottom",
        duration: 5000,
        isClosable: true,
        status: "info",
      });
    });
  };

  return { joinChatroom };
}
