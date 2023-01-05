import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  background-color: transparent;
  z-index: 3;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: start;

  opacity: 0;
  pointer-events: none;

  transition: all 250ms ease-in-out;

  &.shown {
    pointer-events: all;
    opacity: 1;
  }

  .modal-container {
    width: 320px;
    display: flex;
  }

  .user-menu-modal {
    margin: 75px 11px 0 auto;

    height: fit-content;
    padding: 15px;
    background-color: ${({ theme }) => theme.userMenuBG};

    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.userMenuBorder};

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 15px;

    opacity: 0;
    transform: translateY(-35%);
    pointer-events: none;

    transition: all 250ms ease-in-out;
  }

  &.shown .user-menu-modal {
    transform: translateY(0);
    pointer-events: all;
    opacity: 1;
  }

  button {
    height: 30px;
    width: 90px;
    justify-content: space-around;

    font-size: 14px;

    background-color: ${({ theme }) => theme.userMenuBtnBG};
    border: 1px solid ${({ theme }) => theme.themeTogglerBG};
    :hover,
    :focus {
      background-color: ${({ theme }) => theme.userMenuBtnBGHover};
      border: 1px solid ${({ theme }) => theme.userMenuBorder};
    }
  }

  .theme-toggle {
    padding: 0;
    gap: 0;
    /* border: 1px solid #fff; */
    border-radius: 5px;

    span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 28px;
    }

    .dark {
      background-color: ${({ theme }) => theme.darkThemeToggler};
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      color: ${({ theme }) => theme.darkThemeIcon};
    }

    .light {
      background-color: ${({ theme }) => theme.lightThemeToggler};
      border-top-right-radius: 5px;
      border-bottom-right-radius: 4px;
      color: ${({ theme }) => theme.lightThemeIcon};
    }
  }
`;
