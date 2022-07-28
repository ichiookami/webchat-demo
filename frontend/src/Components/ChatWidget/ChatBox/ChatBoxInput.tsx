import { Button, Input, InputGroup, useCallbackRef } from "@chakra-ui/react";
import { useState } from "react";
import { ChatSocket } from "service/chat";
import { Message, useChatStore } from "state/chatStore";

export function ChatBoxInput() {
  const [content, setContent] = useState<string>("");
  const name = useChatStore((state) => state.name);
  const setMessage = useChatStore((state) => state.setMessages);

  const sendMessage = useCallbackRef(() => {
    if (!content) return;
    ChatSocket.emit("sendmessage", {
      sender: name,
      content: { type: 1, content },
      ts: Date.now(),
    } as Message);
    setContent("");
  }, [content, name]);

  return (
    <>
      <InputGroup>
        <Input
          placeholder="Say something..."
          mr="1"
          value={content}
          onChange={(e) => setContent(e?.target?.value)}
        />
        <Button onClick={sendMessage} disabled={!content}>Send</Button>
      </InputGroup>
    </>
  );
}
