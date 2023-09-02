import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  padding: 50px 0 100px 0;
  position: fixed;

  .dates {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0;

    span {
      font-size: 1.3rem;
    }
  }

  .slider--bar {
    border: 1px solid ${({ theme }) => theme.colors.secondary.main};
    padding: 4px;
    margin-left: 15px;
    border-radius: 15px;

    .slider-circle__outer {
      border: 1px dashed black;
      border-radius: 50%;
      cursor: pointer;

      .slider-circle__inner {
        background-color: ${({ theme }) => theme.colors.secondary.main};
        border-radius: 50%;
        height: 5px;
        width: 5px;
        margin: 6px;
      }
    }
  }
`;
