import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backdropBg};

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: none;
  opacity: 0;
  transition: all 250ms ease-in-out;

  &.opened {
    pointer-events: all;
    opacity: 1;
  }

  form {
    background-color: ${({ theme }) => theme.modalBg};
    padding: 15px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.mainBorder};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    input {
      border-radius: 5px;
      width: 250px;
      height: 35px;
      padding: 5px 10px;

      margin: 0 auto 10px;

      text-align: center;
      font-family: inherit;
      font-size: 20px;

      border: 1px solid ${({ theme }) => theme.mainBorder};
      background-color: ${({ theme }) => theme.filterInputBG};
      color: ${({ theme }) => theme.inputText};

      :focus,
      :hover {
        outline: 2px solid ${({ theme }) => theme.inputHoverLine};
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

      background-color: ${({ theme }) => theme.submitContactBtnBG};
      color: ${({ theme }) => theme.submitContactBtnText};
      border-color: ${({ theme }) => theme.submitContactBtnBorder};
    }
  }
`;
