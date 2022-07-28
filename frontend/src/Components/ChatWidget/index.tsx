import { Join } from "./Join/Join";
import { useChatStore } from "state/chatStore";
import { ChatStatus } from "state/const";
import { ChatBox } from "./ChatBox";
import { Spinner } from "@chakra-ui/react";

export function ChatWidget() {
  const chatStatus = useChatStore((state) => state.chatStatus);

  if (chatStatus === ChatStatus.NOT_CONNECT || chatStatus === ChatStatus.CONNECTING) {
    return <Join />;
  }
  if (chatStatus === ChatStatus.DISCONNECTING) {
    return <Spinner />;
  }

  return <ChatBox />;
}
