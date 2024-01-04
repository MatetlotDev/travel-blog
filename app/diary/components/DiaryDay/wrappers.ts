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

      .image-wrapper__last {
      }
    }

    .text {
      text-align: justify;
      line-height: 1.4;

      .dots {
        display: flex;
        margin-top: 50px;
        margin-right: 50px;
        justify-content: flex-end;

        span {
          display: block;
          width: 13px;
          height: 13px;
          background-color: #182c2580;
          margin-right: 13px;
        }
      }
    }
  }
`;

export const ImageDiv = styled.div<{
  url: string;
  isLast: boolean;
  rest: number;
}>`
  background: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;

  ${({ isLast }) =>
    !isLast &&
    `
    &:hover {
      transform: scale(1.2);
    }
  `}

  ${({ isLast, rest }) =>
    isLast &&
    `
    &::after {
        position: absolute;
        content: '';
        z-index: 10;
        background: #00000099;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    &::before {
        position: absolute;
        content: '+${rest}';
        z-index: 11;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        transition: transform .3s
    }

    &:hover {
        &::before {
            transform: scale(1.6);
        }
    }
  `}
`;
