import { Grid, GridItem } from "@chakra-ui/react";
import { ChatBoxInput } from "./ChatBoxInput";
import { ChatBoxView } from "./ChatBoxView";

export function ChatBox() {
  return (
    <Grid
      w="100%"
      h="100%"
      gridTemplateRows="1fr minmax(1px, auto)"
      flex="1"
      gap="1"
    >
      <GridItem
        alignSelf="stretch"
        overflow="auto"
        maxH="calc(100vh - 90px)"
        bg="gray.100"
        borderRadius=".5em"
        p="1em"
      >
        <ChatBoxView />
      </GridItem>
      <GridItem alignSelf="center">
        <ChatBoxInput />
      </GridItem>
    </Grid>
  );
}
