import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => (
  <>
    <Box as="main">{children}</Box>
  </>
);

export default Layout;
