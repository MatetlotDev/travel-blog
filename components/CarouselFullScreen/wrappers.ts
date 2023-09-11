import styled from '@emotion/styled';

export const Wrapper = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(7.5px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  color: white;

  .content {
    .header {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .date {
      }
      .location {
        display: flex;
        align-items: center;

        p {
          margin-left: 5px;
        }
      }
    }
    .image {
    }

    .description {
    }
  }

  .close {
    border: 1px dashed white;
    position: absolute;
    top: 50px;
    right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }

  .more {
    border: 1px dashed white;
    position: absolute;
    top: 120px;
    right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }
`;
