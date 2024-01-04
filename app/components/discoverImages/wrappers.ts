import styled from '@emotion/styled';

export const DiscoverImagesContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: 10vh 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 35%;
  margin-right: 15vh;

  p {
    margin: 5vh 0;
    font-size: 3.3rem;
    font-style: italic;
    font-weight: 300;
    width: 90%;
  }
`;
