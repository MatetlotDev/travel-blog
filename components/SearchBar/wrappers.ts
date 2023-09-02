import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary.main};
  padding: 5px;

  input {
    border: none;
    background: transparent;
    font-size: 2.3rem;
    font-weight: 200;

    &:visited,
    &:active,
    &:focus,
    &:focus-visible {
      outline: 0;
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.secondary.main};
  }

  svg.close-icon {
    cursor: pointer;
  }
`;
