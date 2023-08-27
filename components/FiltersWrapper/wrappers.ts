import styled from '@emotion/styled';

export const Wrapper = styled.div<{ open: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 9999;
  width: ${({ open }) => (open ? '100%' : 'fit-content')};
`;

export const FiltersContent = styled.div<{ open: boolean }>`
  background: ${({ theme: { colors } }) => colors.secondary.main};
  color: ${({ theme: { colors } }) => colors.primary.main};
  padding: ${({ open }) => (open ? '30px' : '0px')};
  width: ${({ open }) => (open ? 'fit-content' : '65px')};
  transition: width 2s linear;

  div.open-button_wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    div.open-button {
      display: flex;
      align-items: center;
      transform: rotate(-90deg);
      height: fit-content;

      p {
        margin-right: 15px;
        font-size: 2.5rem;
      }
    }
  }

  div.content {
    div.flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h2 {
      font-weight: 200;
      font-size: 3rem;
    }
    button {
      border: 1px dashed ${({ theme: { colors } }) => colors.primary.main};
      border-radius: 50%;
      padding: 10px;
      background: transparent;
      display: flex;
      align-items: center;
      cursor: pointer;

      svg {
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;

export const Blur = styled.div<{ open: boolean }>`
  width: 100%;
  background: rgba(244, 233, 222, 0.2);
  backdrop-filter: blur(5px);
  /* display: ${({ open }) => (open ? 'block' : 'none')}; */
`;
