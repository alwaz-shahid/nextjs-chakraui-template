import NextImage from "next/image";

import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Home = () => (
  <>
    <NextSeo title="Home" />

    <Box
      as="section"
      maxW="1440px"
      py="4"
      px={[4, 6, 10, 14, 20]}
      mx="auto"
      display="flex"
      flexDir={{ base: "column-reverse", lg: "row" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="center"
      textAlign={{ base: "center", lg: "left" }}
    ></Box>
  </>
);

export default Home;
