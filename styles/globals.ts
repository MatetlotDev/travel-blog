import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const styles = (theme: Theme) => css`
  html,
  body {
    font-size: 10px;
    color: ${theme.colors.black.main};
    background-color: ${theme.colors.primary.main};
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: clamp(3.7rem, 3.7rem + 1.2vw, 5.6rem);
    font-weight: 400;
  }

  h2 {
    font-size: clamp(3.1rem, 3.1rem + 1.2vw, 4.6rem);
    font-weight: 400;
    font-style: italic;
  }

  h3 {
    font-size: clamp(2.1rem, 2.1rem + 1.2vw, 3.3rem);
    font-weight: 300;
  }

  h4 {
    font-size: clamp(1.5rem, 1.5rem + 1.2vw, 2.6rem);
    font-weight: 400;
  }

  h6 {
    font-size: clamp(1.7rem, 1.7rem + 1.2vw, 2.8rem);
    font-weight: 400;
    font-style: italic;
  }

  p {
    font-size: clamp(1.3rem, 1.3rem + 1.2vw, 2rem);
    font-weight: 300;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: inherit;
  filter: blur(30px);
`;
