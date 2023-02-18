import styled from '@emotion/styled';

export const MainWrapper = styled.section`
  margin: 400px 0;
  background: inherit;
  display: flex;
  align-items: center;
`;
export const Text = styled.div`
  width: 38vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-left: 15vh;
  background: inherit;

  h2,
  p,
  button,
  a {
    z-index: 1;
  }

  p {
    margin: 5vh 0;
    font-size: 3.3rem;
    font-style: italic;
    font-weight: 300;
    width: 90%;
  }
`;
