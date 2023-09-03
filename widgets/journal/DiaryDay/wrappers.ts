import styled from '@emotion/styled';

export const Wrapper = styled.section`
  margin-left: 225px;

  .date {
    display: flex;
    justify-content: flex-start;
    padding: 0 230px;

    p {
      padding: 6px 20px;
      border: 1px solid ${({ theme }) => theme.colors.secondary.main};
      border-radius: 40px;
    }
  }

  h4 {
    width: fit-content;
    margin: 0 auto 30px auto;
  }

  .content {
    display: flex;
    margin-bottom: 100px;
    margin-right: 140px;

    .pictures {
      display: grid;
      grid-template-columns: repeat(3, 200px);
      grid-template-rows: repeat(3, 200px);
      grid-gap: 10px;
      margin-right: 70px;

      .image-wrapper {
      }
    }

    .text {
      text-align: justify;
      line-height: 1.4;

      .dots {
      }
    }
  }
`;

export const ImageDiv = styled.div<{ url: string }>`
  background: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    &::after {
      background: rgba(0, 0, 0, 0.5);
    }
    transform: scale(1.2);
  }
`;
