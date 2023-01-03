import styled from 'styled-components';
import { colors } from 'utils/theme';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: ${colors.backdropBg};

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: none;
  opacity: 0;
  /* transform: scale(0); */
  transition: all 250ms ease-in-out;

  &.opened {
    /* transform: scale(1); */
    pointer-events: all;
    opacity: 1;
  }

  form {
    background-color: ${colors.modalBg};
    padding: 15px;
    border-radius: 5px;
    border: 1px solid ${colors.mainBorder};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    input {
      border-radius: 5px;
      border: 1px solid ${colors.mainBorder};
      width: 250px;
      height: 35px;
      padding: 5px 10px;

      margin: 0 auto 10px;

      background-color: ${colors.darkTransparent};
      color: ${colors.inputText};
      text-align: center;
      font-family: inherit;
      font-size: 20px;

      :focus,
      :hover {
        outline: none;
      }
    }

    .btns-wrapper {
      display: flex;
      gap: 20px;
    }
    button {
      width: 65px;

      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      font-size: 14px;
      font-weight: 500;
    }
  }
`;
