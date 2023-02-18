import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.primary.main};
  padding: 40px 0 15px 0;

  .flex {
    display: flex;
    justify-content: space-around;

    & > * {
      width: 20vw;
    }
  }

  .credential {
    font-style: italic;
    font-weight: 200;
    font-size: 1.7rem;
    text-align: center;

    a {
      text-decoration: underline;
    }
  }
`;
export const Socials = styled.div`
  text-align: center;

  .icons {
    display: flex;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 2.5rem;
    border-radius: 50%;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;

    &:hover {
      border: 1px dashed ${({ theme }) => theme.colors.primary.main};
    }
    &:active {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 30px;
    border: none;
    border-radius: 50%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 4.5rem;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border: 1px dashed ${({ theme }) => theme.colors.primary.main};
    }
    &:active {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;
export const Menu = styled.div`
  a {
    font-size: 2rem;
    line-height: 3rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
