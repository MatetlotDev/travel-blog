import { Theme } from '@emotion/react';
import {
  L_SCREEN,
  M_SCREEN,
  S_SCREEN,
  XL_SCREEN,
  XS_SCREEN,
  XXL_SCREEN,
} from 'constants/global';

export const defaultTheme: Theme = {
  colors: {
    primary: {
      main: '#FFF9F3',
      90: 'rgba(255, 249, 243, 0.9)',
      80: 'rgba(255, 249, 243, 0.8)',
      70: 'rgba(255, 249, 243, 0.7)',
      60: 'rgba(255, 249, 243, 0.6)',
      50: 'rgba(255, 249, 243, 0.5)',
      40: 'rgba(255, 249, 243, 0.4)',
      30: 'rgba(255, 249, 243, 0.3)',
      20: 'rgba(255, 249, 243, 0.2)',
      10: 'rgba(255, 249, 243, 0.1)',
    },
    secondary: {
      main: '#182C25',
      90: 'rgba(24, 44, 37, 0.9)',
      80: 'rgba(24, 44, 37, 0.8)',
      70: 'rgba(24, 44, 37, 0.7)',
      60: 'rgba(24, 44, 37, 0.6)',
      50: 'rgba(24, 44, 37, 0.5)',
      40: 'rgba(24, 44, 37, 0.4)',
      30: 'rgba(24, 44, 37, 0.3)',
      20: 'rgba(24, 44, 37, 0.2)',
      10: 'rgba(24, 44, 37, 0.1)',
    },
    black: {
      main: '#0A0A0A',
      90: 'rgba(10, 10, 10, 0.9)',
      80: 'rgba(10, 10, 10, 0.8)',
      70: 'rgba(10, 10, 10, 0.7)',
      60: 'rgba(10, 10, 10, 0.6)',
      50: 'rgba(10, 10, 10, 0.5)',
      40: 'rgba(10, 10, 10, 0.4)',
      30: 'rgba(10, 10, 10, 0.3)',
      20: 'rgba(10, 10, 10, 0.2)',
      10: 'rgba(10, 10, 10, 0.1)',
    },
    white: {
      main: '#FAFAFA',
      90: 'rgba(250, 250, 250, 0.9)',
      80: 'rgba(250, 250, 250, 0.8)',
      70: 'rgba(250, 250, 250, 0.7)',
      60: 'rgba(250, 250, 250, 0.6)',
      50: 'rgba(250, 250, 250, 0.5)',
      40: 'rgba(250, 250, 250, 0.4)',
      30: 'rgba(250, 250, 250, 0.3)',
      20: 'rgba(250, 250, 250, 0.2)',
      10: 'rgba(250, 250, 250, 0.1)',
    },
  },
  breakpoints: {
    extraSmall: `@media (max-width: ${XS_SCREEN}px)`,
    small: `@media (max-width: ${S_SCREEN}px)`,
    medium: `@media (max-width: ${M_SCREEN}px)`,
    large: `@media (max-width: ${L_SCREEN}px)`,
    extraLarge: `@media (max-width: ${XL_SCREEN}px)`,
    extraExtraLarge: `@media (max-width: ${XXL_SCREEN}px)`,
  },
};
