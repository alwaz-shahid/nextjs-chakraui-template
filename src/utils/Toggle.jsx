import React from 'react';
import { Button, ColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Toggle({ onClick, colorMode }) {
  return (
    <Button
      aria-label={colorMode === 'light' ? 'dark mode' : 'ight mode'}
      variant={colorMode === 'light' ? 'outline' : 'solid'}
      _hover={{ color: 'black', bgColor: 'white' }}
      onClick={onClick}
      ml={{ lg: '6' }}
    >
      {colorMode === 'light' ? (
        <MoonIcon name='moon-icon' />
      ) : (
        <SunIcon name='sun-icon' />
      )}
    </Button>
  );
}
