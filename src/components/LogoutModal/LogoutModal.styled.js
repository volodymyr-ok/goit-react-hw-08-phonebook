import styled from 'styled-components';

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

  background-color: ${({ theme }) => theme.backdropBg};
  height: 100vh;
  width: 100vw;

  &.shown {
    opacity: 1;
    pointer-events: all;
  }
`;

export const Modal = styled.div`
  padding: 15px;
  background-color: ${({ theme }) => theme.modalBg};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.mainBorder};

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
    /* border-color: ${({ theme }) => theme.submitContactBtnBorder};
    background-color: ${({ theme }) => theme.submitContactBtnBG};
    color: ${({ theme }) => theme.submitContactBtnText}; */
    border-color: transparent;
    display: inline-flex;
    justify-content: center;

    &.yes,
    &.yes {
      background-color: ${({ theme }) => theme.yesBtn};
      color: ${({ theme }) => theme.minorTextColor};
    }
    &.no,
    &.no {
      background-color: ${({ theme }) => theme.noBtn};
      color: ${({ theme }) => theme.minorTextColor};
    }

    :hover,
    :focus {
      border-color: ${({ theme }) => theme.submitContactBtnBorder};
      background-color: ${({ theme }) => theme.submitContactBtnBG};
      color: ${({ theme }) => theme.submitContactBtnText};
    }
  }
`;
