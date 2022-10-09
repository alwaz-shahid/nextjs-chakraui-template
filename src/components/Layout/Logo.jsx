import NextLink from 'next/link';

import { chakra } from '@chakra-ui/react';
import React from 'react';

export default function Logo() {
  return (
    <NextLink href='/' passHref>
      <chakra.a userSelect='none' fontSize='2rem' fontWeight='700'>
        LOGO
      </chakra.a>
    </NextLink>
  );
}
