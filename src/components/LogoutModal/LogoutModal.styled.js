import styled from 'styled-components';
import { colors } from 'utils/theme';

export const Backdrop = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;

  opacity: 0;
  pointer-events: none;
  transition: all 250ms ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.backdropBg};
  height: 100vh;
  width: 100vw;

  &.shown {
    opacity: 1;
    pointer-events: all;
  }
`;

export const Modal = styled.div`
  padding: 15px;
  background-color: ${colors.modalBg};
  border-radius: 5px;
  border: 1px solid ${colors.mainBorder};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  div {
    display: flex;
    gap: 15px;
  }

  p {
    font-size: 18px;
  }
  button {
    font-size: 18px;
    min-width: 50px;
    background-color: ${colors.mainColor};
    color: ${colors.btnText};
    display: inline-flex;
    justify-content: center;

    &.yes:hover,
    &.yes:focus {
      background-color: ${colors.yesBtn};
      color: ${colors.white};
    }
    &.no:hover,
    &.no:focus {
      background-color: ${colors.noBtn};
      color: ${colors.white};
    }
  }
`;
