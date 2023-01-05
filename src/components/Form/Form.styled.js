import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;

  box-shadow: 0px -1px 5px 0px ${({ theme }) => theme.mainTransparent};
  background-color: ${({ theme }) => theme.modalBg};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  padding: 15px 25px;
  margin: 0 auto;
  width: 100%;
  min-height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.opened {
    gap: 15px;
  }

  .creator-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    height: 40px;
    width: 290px;
    padding: 5px 10px;
    outline: none;
    border-radius: 5px;

    border: 1px solid ${({ theme }) => theme.mainBorder};
    background-color: transparent;
    color: ${({ theme }) => theme.mainColor};

    font-size: 20px;
    font-weight: 500;
    font-family: inherit;
  }

  .creator-wrap {
    max-height: 0;
    overflow: hidden;

    transition: max-height 0.25s ease-in-out;
    transition-timing-function: ease-in-out;

    &.opend {
      max-height: 308px;
    }

    input {
      :hover,
      :focus {
        outline: ${({ theme }) => theme.inputHoverLine};
      }
    }
  }

  #creator {
    transform: translateY(100%);
    transition: all 250ms ease-in-out;

    &.opend {
      margin-bottom: 15px;
      transform: translateY(0%);
    }
  }

  .submit-btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    font-size: 18px;
    font-weight: 500;

    background-color: ${({ theme }) => theme.submitContactBtnBG};
    color: ${({ theme }) => theme.submitContactBtnText};
    border-color: ${({ theme }) => theme.submitContactBtnBorder};
  }
`;
