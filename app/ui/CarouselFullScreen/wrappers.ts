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
      margin-bottom: 5px;

      p {
        font-size: 1.7rem;
        font-weight: 200;
      }
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
      position: unset !important;
      max-width: 70vw;
      max-height: 80vh;
      width: unset !important;
      height: unset !important;
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
    height: 40px;
    width: 40px;
    font-size: 1.2rem;
    cursor: pointer;
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
    height: 40px;
    width: 40px;
    font-size: 2.5rem;
    cursor: pointer;
  }

  .button {
    border-radius: 50%;
    border: 1px dashed #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    button {
      cursor: pointer;
      background: #b4b4b4;
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s;

      &:hover {
        background: white;
      }
    }
  }

  .prev {
    left: 50px;
  }

  .next {
    right: 50px;
  }
`;
