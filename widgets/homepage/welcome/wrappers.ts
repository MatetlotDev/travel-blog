import styled from '@emotion/styled';

type CircleProps = {
  width: number;
  delay: number;
};

// --- HOME --- //
export const HomeWrapper = styled.section`
  background-image: url('/homepage/boat.jpg');
  height: 100vh;
  background-position: center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    font-weight: 300;
    font-size: 62px;
    margin-bottom: 3vh;
    text-shadow: 0px 0px 30px #000;
  }
  strong {
    font-style: italic;
    font-weight: 400;
  }
  p {
    font-size: 45px;
    font-weight: 200;
    text-shadow: 0px 0px 24px #000;

    strong {
      font-weight: 300;
    }
  }
`;

export const DiscoverSpan = styled.div`
  font-size: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 1vh;
  font-weight: 300;
`;

export const Circle = styled.div<CircleProps>`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border: 1px dashed #fff;
  border-radius: 50%;
  position: absolute;
  transform: translateY(52vh);
`;
