import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import "./fonts/stylesheet.css";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box minHeight={"100vh"} width={"100%"}></Box>
    </ChakraProvider>
  );
};
