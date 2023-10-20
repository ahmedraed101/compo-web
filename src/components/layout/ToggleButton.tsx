'use client';

import React from 'react';
import { Button } from '@nextui-org/react';
import { useThemeContext } from '@/app/providers';
import MoonIcon from '../icons/Moon';
import SunIcon from '../icons/Sun';

function ToggleButton() {
  const { theme, setTheme } = useThemeContext();
  const newTheme = theme === 'light' ? 'dark' : 'light';
  return (
    <Button onClick={() => setTheme(newTheme)} isIconOnly>
      {newTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}

export default ToggleButton;
