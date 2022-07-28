import { Box, Text } from "@chakra-ui/react";
import { useChatStore } from "state/chatStore";

export function ChatBoxView() {
  const messages = useChatStore((state) => state.messages);
  const name = useChatStore((state) => state.name);

  return (
    <>
      {messages.map((message) => {
        return (
          <Text key={message.id}>
            {message.sender}: {message.content.content}
          </Text>
        );
      })}
    </>
  );
}
