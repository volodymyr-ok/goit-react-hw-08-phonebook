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
    display: inline-flex;
    justify-content: center;
    border-width: 2px;

    &.yes {
      background-color: ${({ theme }) => theme.yesBtnBG};
      color: ${({ theme }) => theme.yesBtnText};
      border-color: ${({ theme }) => theme.yesBtnBorder};

      :hover,
      :focus {
        background-color: ${({ theme }) => theme.yesBtnText};
        color: ${({ theme }) => theme.yesBtnBG};
        border-color: ${({ theme }) => theme.yesBtnBG};
      }
    }

    &.no {
      background-color: ${({ theme }) => theme.noBtnBG};
      color: ${({ theme }) => theme.noBtnText};
      border-color: ${({ theme }) => theme.noBtnBorder};

      :hover,
      :focus {
        background-color: ${({ theme }) => theme.noBtnText};
        color: ${({ theme }) => theme.noBtnBG};
        border-color: ${({ theme }) => theme.noBtnBG};
      }
    }
  }
`;
