import {
  ChakraProvider,
  Grid,
  theme,
  Container,
  GridItem,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { ChatWidget } from "./Components/ChatWidget";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container>
      <Grid h="100vh" gridTemplateRows="minmax(40px, auto) 1fr" p=".5em">
        <GridItem justifySelf="flex-end">
          <ColorModeSwitcher />
        </GridItem>
        <GridItem alignItems="center" h="100%" display="flex" overflow={"hidden"}>
          <ChatWidget />
        </GridItem>
      </Grid>
    </Container>
  </ChakraProvider>
);
