import styled from '@emotion/styled';

export const QuestionContainer = styled.section`
  width: 100%;
  padding: 40px;
  margin-top: 200px;

  h2 {
    margin-left: 366px;
    font-weight: 300;
  }

  p {
    max-width: 940px;
  }

  .content {
    display: flex;
    padding: 50px 185px;
  }

  .img-wrapper {
    position: relative;

    &.img-1 {
      width: 300px;
      height: 419px;
      transform: rotate(1deg);
    }
    &.img-2 {
      width: 228px;
      height: 160px;
      transform: translate(-30px, -65px) rotate(-1deg);
    }

    img {
      object-fit: cover;
    }
  }
`;
export const QuestionImages = styled.div`
  position: relative;
  padding: 40px;
`;
export const QuestionText = styled.div`
  margin-top: 75px;
  margin-left: 60px;

  h4 {
    margin-bottom: 10px;
  }
`;
