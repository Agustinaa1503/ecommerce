"use client";

import { FC } from 'react';
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { ThemeProviderProps } from 'next-themes/dist/types';
import {NextUIProvider} from '@nextui-org/react';

const Providers: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;