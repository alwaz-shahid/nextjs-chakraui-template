import NextImage from "next/image";

import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import DragDrop from "../components/uiContainers/DragDrop";

const Home = () => (
  <>
    <NextSeo title="Home" />

    <Box
      as="section"
      maxW="1440px"
      px="2"
      mx="auto"
      display="flex"
      flexDir="column"
      justifyContent="start"
      alignItems="center"
      // px={[4, 6, 10, 14, 20]}
      // flexDir={{ base: "column-reverse", lg: "row" }}
      // justifyContent={{ base: "center", lg: "space-between" }}
      // alignItems="center"
      // textAlign={{ base: "center", lg: "left" }}
    >
      {/* <DragDrop></DragDrop> */}
    </Box>
  </>
);

export default Home;
