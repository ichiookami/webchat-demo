import { Button, useCallbackRef } from "@chakra-ui/react";
import { useInitChatService } from "hooks/chatSocket";
import { useChatStore } from "state/chatStore";
import { ChatStatus } from "state/const";

export function Join() {
  const { joinChatroom } = useInitChatService();
  const chatStatus = useChatStore((state) => state.chatStatus);

  const joinCb = useCallbackRef(() => {
    joinChatroom();
  });

  return (
    <Button
      onClick={joinCb}
      width="100%"
      isLoading={chatStatus === ChatStatus.CONNECTING}
      disabled={chatStatus === ChatStatus.CONNECTING}
    >
      Join
    </Button>
  );
}
