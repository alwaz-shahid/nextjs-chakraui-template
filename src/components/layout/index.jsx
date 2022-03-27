import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => (
  <Box maxW={"1440px"} minH="100vh" mr="auto" ml={"auto"} mx="autp" as="main">
    {children}
  </Box>
);

export default Layout;
